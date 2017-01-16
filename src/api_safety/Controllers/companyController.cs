using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using model_safety.safety;
using Microsoft.Extensions.Logging;


namespace api_safety.Controllers
{
    [Route("api/[controller]")]
    public class companyController : Controller
    {
        private safetyContext _context;
        private ILogger _logger;
        public companyController(safetyContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger<companyController>();
        }

        //--------------------- GET: api/values
        [HttpGet]
        public IEnumerable<company> Get()
        {
            var list = _context.company.ToList<company>();

            _logger.LogInformation(list.Count.ToString());

            return list;
        }

        //--------------------- GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var company = _context.company.Where(c => c.companyId == id).FirstOrDefault<company>();

            if (company != null)
            {
                return Ok(company);
            }
            else
            {
                return NotFound();
            }
        }

        //--------------------- POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]company value)
        {
            var company = new company();

            company.companyId = value.companyId;
            company.name = value.name;
            company.isActive = true;

            _context.company.Add(company);
            _context.SaveChanges();

            var send = _context.company.Where(c => c.companyId == company.companyId).FirstOrDefault<company>();

            return Ok(send);
        }

        //--------------------- PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]company value)
        {
            var company = _context.company.Where(c => c.companyId == id).FirstOrDefault<company>();

            if (company != null)
            {
                company.name = value.name;

                _context.SaveChanges();

                var send = _context.company.Where(c => c.companyId == company.companyId).FirstOrDefault<company>();

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
        public IActionResult deactivate(int id, [FromBody]company value)
        {
            var company = _context.company.Where(c => c.companyId == id).FirstOrDefault<company>();

            if (company != null)
            {
                company.isActive = false;

                _context.SaveChanges();

                return Ok(company);
            }
            else
            {
                return NotFound();
            }

        }

        // DEACTIVATE
        [Route("activate/{id}")]
        [HttpPut()]
        public IActionResult activate(int id, [FromBody]company value)
        {
            var company = _context.company.Where(c => c.companyId == id).FirstOrDefault<company>();

            if (company != null)
            {
                company.isActive = true;

                _context.SaveChanges();

                return Ok(company);
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
            var company = _context.company.Where(c => c.companyId == id).FirstOrDefault<company>();

            if (company != null)
            {
                _context.Remove(company);

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
