using Hosting;
using Microsoft.Owin;
using Newtonsoft.Json.Serialization;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

[assembly: OwinStartup(typeof(Startup))]

namespace Hosting
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var httpConfig = new HttpConfiguration();
            httpConfig.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{action}");

            httpConfig.Formatters.Clear();
            var jsonFormatter = new JsonMediaTypeFormatter();
            jsonFormatter.SerializerSettings.ContractResolver =
                new CamelCasePropertyNamesContractResolver();

            httpConfig.Formatters.Add(jsonFormatter);

            // TODO: Refactor ;(
            httpConfig.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            app.UseWebApi(httpConfig);
        }
    }
}