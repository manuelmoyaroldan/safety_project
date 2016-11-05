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
            //var equipments = _context.equipment.ToList<equipment>();
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
        public IActionResult Post([FromBody]equipment value)
        {
            var equipment = new equipment();

            equipment.name = value.name;
            if (value.equipmenttype == null) equipment.equipmenttypeId = 0; else equipment.equipmenttypeId= value.equipmenttype.equipmenttypeId;
            equipment.isActive = true;

            _context.equipment.Add(equipment);
            _context.SaveChanges();

            var send = _context.equipment.Where(e => e.equipmentId== equipment.equipmentId).FirstOrDefault<equipment>();

            return Ok(send);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]equipment value)
        {
            var equipment = _context.equipment.Where(e => e.equipmentId == id).FirstOrDefault<equipment>();
            if (equipment!= null)
            {
                equipment.name = value.name;
                if (value.equipmenttype == null) equipment.equipmentId = 0; else equipment.equipmentId = value.equipmentId;

                _context.SaveChanges();

                _logger.LogInformation("Equipment put");
                return Ok(equipment);
            }else
            {
                return NotFound();
            }
            
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}
