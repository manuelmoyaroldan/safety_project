using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_safety.safety
{
    public class crashdetail
    {
        public int crashdetailId { get; set; }

        public int crashId { get; set; }
        public int equipmentId { get; set; }
        public int workerId { get; set; }

        public crash crash { get; set; }
        public equipment equipment { get; set; }
        public worker worker { get; set; }

        
    }
}
