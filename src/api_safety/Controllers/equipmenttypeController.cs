using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using model_safety.safety;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace api_safety.Controllers
{
    [Route("api/[controller]")]
    public class equipmenttypeController : Controller
    {
        private safetyContext _context;
        private ILogger _logger;
        public equipmenttypeController(safetyContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<equipmenttypeController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<equipmenttype> Get()
        {
            var list = _context.equipmenttype.ToList<equipmenttype>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var equipmenttype = _context.equipmenttype.Where(c => c.equipmenttypeId == id).FirstOrDefault<equipmenttype>();

            if (equipmenttype != null)
            {
                return Ok(equipmenttype);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]equipmenttype value)
        {
            var equipmenttype = new equipmenttype();

            equipmenttype.equipmenttypeId = value.equipmenttypeId;
            equipmenttype.name = value.name;
            equipmenttype.isActive = true;

            _context.equipmenttype.Add(equipmenttype);
            _context.SaveChanges();

            var send = _context.equipmenttype.Where(c => c.equipmenttypeId == equipmenttype.equipmenttypeId).FirstOrDefault<equipmenttype>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]equipmenttype value)
        {
            var equipmenttype = _context.equipmenttype.Where(c => c.equipmenttypeId == id).FirstOrDefault<equipmenttype>();

            if (equipmenttype != null)
            {
                equipmenttype.name = value.name;

                _context.SaveChanges();

                var send = _context.equipmenttype.Where(c => c.equipmenttypeId == equipmenttype.equipmenttypeId).FirstOrDefault<equipmenttype>();

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
        public IActionResult deactivate(int id, [FromBody]equipmenttype value)
        {
            var equipmenttype = _context.equipmenttype.Where(c => c.equipmenttypeId == id).FirstOrDefault<equipmenttype>();

            if (equipmenttype != null)
            {
                equipmenttype.isActive = false;

                _context.SaveChanges();

                return Ok(equipmenttype);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]equipmenttype value)
        {
            var equipmenttype = _context.equipmenttype.Where(c => c.equipmenttypeId == id).FirstOrDefault<equipmenttype>();

            if (equipmenttype != null)
            {
                equipmenttype.isActive = true;

                _context.SaveChanges();

                return Ok(equipmenttype);
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
            var equipmenttype = _context.equipmenttype.Where(c => c.equipmenttypeId == id).FirstOrDefault<equipmenttype>();

            if (equipmenttype != null)
            {
                _context.Remove(equipmenttype);

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
