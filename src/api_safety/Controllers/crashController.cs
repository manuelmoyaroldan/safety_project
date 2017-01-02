using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using model_safety;
using Microsoft.EntityFrameworkCore;
using model_safety.safety;
using System.Linq;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace api_safety.Controllers
{
    [Route("api/[controller]")]
    public class crashController : Controller
    {
        private safetyContext _context;
        private ILogger _logger;
        public crashController(safetyContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<crashController>();
        }

        //------------------ GET: api/crash
        [HttpGet]
        public IEnumerable<crash> Get()
        {
            var crashs = _context.crash.ToList<crash>();

            _logger.LogInformation(crashs.Count.ToString());

            return crashs;
        }

        //------------------ GET api/crash/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            //get crash
            if (id > 0)
            {
                var crash = getById(id);

                if (crash != null)
                {
                    return new OkObjectResult(JsonConvert.SerializeObject(crash, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore })); //Loop referencing
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                var crash = new crash();

                return new OkObjectResult(JsonConvert.SerializeObject(crash, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore }));
            }
        }

        //------------------ POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]crash value)
        {

            var crash = new crash();

            copydata(value, crash);
            adddetail(value, crash);

            _context.crash.Add(crash);
            _context.SaveChanges();

            _logger.LogInformation("Travel post");

            var send = getById(crash.crashId);
            return new OkObjectResult(JsonConvert.SerializeObject(send, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore })); //Loop referencing
            //return Ok(send);
        }
        private crash getById(int id)
        {
            return _context.crash.Include(t => t.crashdetail)
                                   .Where(t => t.crashId == id).FirstOrDefault<crash>();
        }
        private void copydata(crash source, crash target)
        {
            target.companyId = source.companyId;
            target.crashmeasureId= source.crashmeasureId;
            target.dayhour= source.dayhour;
            target.isauthorknown = source.isauthorknown;
            target.isoutofservice = source.isoutofservice;
        }
        private void adddetail(crash source, crash target)
        {
            if (source.crashdetail != null && source.crashdetail.Count > 0)
            {
                target.crashdetail = new List<crashdetail>();
            }

            foreach (crashdetail detail in source.crashdetail)
            {
                target.crashdetail.Add(detail);
            }
        }
        //------------------ PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]crash value)
        {
            var crash = _context.crash.Include(t => t.crashdetail).Where(t => t.crashId == id).FirstOrDefault<crash>();

            if (crash != null)
            {
                copydata(value, crash);

                _context.SaveChanges();

                var send = getById(id);

                return Ok(send);
            }
            else
            {
                return NotFound();
            }

        }

        //------------------ DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var crash = _context.crash.Include(t => t.crashdetail).Where(t => t.crashId == id).FirstOrDefault<crash>();

            if (crash != null)
            {
                //crash.isActive = false;

                _context.SaveChanges();

                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
