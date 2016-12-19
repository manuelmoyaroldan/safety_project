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
        public equipmentController(safetyContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<equipmentController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<equipment> Get()
        {
            var list = _context.equipment.Include(e=>e.equipmenttype).ToList<equipment>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var equipment = _context.equipment.Include(e=>e.equipmenttype).Where(c => c.equipmentId == id).FirstOrDefault<equipment>();

            if (equipment != null)
            {
                return Ok(equipment);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]equipment value)
        {
            var equipment = new equipment();

            if (value.equipmenttype != null) equipment.equipmenttypeId = value.equipmenttype.equipmenttypeId;
            equipment.name = value.name;
            equipment.isActive = true;

            _context.equipment.Add(equipment);
            _context.SaveChanges();

            var send = _context.equipment.Include(e=>e.equipmenttype).Where(c => c.equipmentId == equipment.equipmentId).FirstOrDefault<equipment>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]equipment value)
        {
            var equipment = _context.equipment.Where(c => c.equipmentId == id).FirstOrDefault<equipment>();

            if (equipment != null)
            {
                if (value.equipmenttype != null) equipment.equipmenttypeId = value.equipmenttype.equipmenttypeId;
                equipment.name = value.name;

                _context.SaveChanges();

                var send = _context.equipment.Include(e=>e.equipmenttype).Where(c => c.equipmentId == equipment.equipmentId).FirstOrDefault<equipment>();

                return Ok(send);
            }
            else
            {
                return NotFound();
            }
        }

        // DEACTIVATE
        [Route("deactivate/{id}")]
        [HttpPut()]
        public IActionResult deactivate(int id, [FromBody]equipment value)
        {
            var equipment = _context.equipment.Where(c => c.equipmentId == id).FirstOrDefault<equipment>();

            if (equipment != null)
            {
                equipment.isActive = false;

                _context.SaveChanges();

                return Ok(equipment);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]equipment value)
        {
            var equipment = _context.equipment.Where(c => c.equipmentId == id).FirstOrDefault<equipment>();

            if (equipment != null)
            {
                equipment.isActive = true;

                _context.SaveChanges();

                return Ok(equipment);
            }
            else
            {
                return NotFound();
            }

        }

        //--------------------- DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var equipment = _context.equipment.Where(c => c.equipmentId == id).FirstOrDefault<equipment>();

            if (equipment != null)
            {
                _context.Remove(equipment);

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
