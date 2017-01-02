using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_safety.safety
{
    public class crash
    {
        public int crashId { get; set; }
        public DateTimeOffset dayhour { get; set; }
        public Boolean isauthorknown { get; set; }
        public Boolean isoutofservice { get; set; }
        public Boolean isActive { get; set; }
        public String comments { get; set; }

        public int crashmeasureId { get; set; }
        public int companyId {get; set;}

        public company company { get; set; }
        public crashmeasure crashmeasure { get; set; }

        public List<crashdetail> crashdetail { get; set; }

    }
}
