using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using model_safety;
using Microsoft.EntityFrameworkCore;
using model_safety.safety;
using System.Linq;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace api_safety.Controllers
{
    [Route("api/[controller]")]
    public class equipmentController : Controller
    {
        private safetyContext _context;
        private ILogger _logger;

        public equipmentController(safetyContext context,ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<equipmentController>();
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<equipment> Get()
        {
            var equipments= _context.equipment.Include(e=>e.equipmenttype).ToList<equipment>();
            
            _logger.LogInformation(equipments.Count.ToString());

            return equipments.ToList<equipment>();            
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}
