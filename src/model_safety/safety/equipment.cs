using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace model_safety.safety
{
    public class equipment
    {
        public int equipmentId { get; set; }
        public string name { get; set; }
        public int equipmenttypeId { get; set; }
        public bool isActive { get; set; }

        public equipmenttype equipmenttype { get; set; }

    }
}
