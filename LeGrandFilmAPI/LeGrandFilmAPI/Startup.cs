using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using LeGrandFilmAPI.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace LeGrandFilmAPI
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            // services.AddResponseCaching();
            services.AddControllers();
            services.AddScoped<IFilmInfoRepository, FilmInfoRepository>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseCors(
                 options => options.WithOrigins("http://localhost:3000", "http://anywheresfine.com/", "https://legrandfilmapi.azurewebsites.net/", "http://localhost", "http://anywheresfine.com/legrandfilm")
                 .AllowAnyMethod()
                 .WithExposedHeaders("Authorization")
                 .AllowAnyHeader()
                 .AllowCredentials()
    );

            // app.UseResponseCaching();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
