using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace model_safety.safety
{
    public class company
    {
        public int companyId { get; set; }
        public String name { get; set; }
        public bool isdeleted { get; set; }
    
    }
}
