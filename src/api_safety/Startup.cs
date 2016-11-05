using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;


using model_safety.safety;

namespace api_safety
{
    public class Startup
    {
        private IHostingEnvironment _env;
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            _env = env;
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddDbContext<safetyContext>(options =>
            //    options.UseSqlite("safety_lite.db")
            //);
            //services.AddEntityFrameworkSqlite().AddDbContext<safetyContext>();
            //// Add framework services.

            //services.AddDbContext<safetyContext>(options =>
            //    options.UseSqlServer(Configuration.GetConnectionString("EASConnection")));

            //services.AddDbContext<safetyContext>(options =>
            //    options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            services.AddDbContext<safetyContext>(
                options => { options.UseSqlite($"Data Source={_env.ContentRootPath}/safety_lite.db"); });


            var policy = new Microsoft.AspNetCore.Cors.Infrastructure.CorsPolicy();

            policy.Headers.Add("*");
            policy.Methods.Add("*");
            policy.Origins.Add("*");

            services.AddCors(x => x.AddPolicy("corsGlobalPolicy", policy));

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
            app.UseMvc();
        }
    }
}
