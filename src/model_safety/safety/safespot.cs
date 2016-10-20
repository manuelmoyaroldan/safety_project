using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_safety.safety
{
    public class safespot
    {
        public int safespotId { get; set; }
        public int name { get; set; }
        public int safespottypeId { get; set; }
        public int companyId { get; set; }
        public Boolean isdeleted { get; set; }

        public safespottype safespottype { get; set; }
        public company company { get; set; }
    }
}
