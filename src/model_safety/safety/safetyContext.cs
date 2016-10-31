using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace model_safety.safety
{
    public class safetyContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public safetyContext(DbContextOptions<safetyContext> options) : base(options)
        {
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    //optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=MyDatabase;Trusted_Connection=True;");
        //    //optionsBuilder.UseSqlite("safety_lite.db");
        //}

        public DbSet<user> user { get; set; }
        public DbSet<equipmenttype> equipmenttype { get; set; }
        public DbSet<equipment> equipment { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<company> company { get; set; }
        //public DbSet<crash> Crash { get; set; }
        //public DbSet<crashdetail> CrashDetail { get; set; }
        //public DbSet<crashmeasure> CrashMeasure { get; set; }
        //public DbSet<crashtype> CrashType { get; set; }
        //public DbSet<equipment> Equipment { get; set; }
        //public DbSet<equipmenttype> EquipmentType { get; set; }
        //public DbSet<safespot> SafeSpot { get; set; }
        //public DbSet<safespottype> SafeSpotType{ get; set; }
        //public DbSet<worker> Worker { get; set; }

        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    //builder.Entity<DataEventRecord>().HasKey(m => m.Id);
        //    //base.OnModelCreating(builder);
        //}


    }
}
