﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace model_safety.safety
{
    public class company
    {
        public int companyId { get; set; }
        public String name { get; set; }
        public Boolean isdeleted { get; set; }
        
    
    }
}
