using Hosting;
using Microsoft.Owin.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleHost
{
    class Program
    {
        static void Main(string[] args)
        {
            var ass = Assembly.LoadFrom("Services.dll");

            using (var server = WebApp.Start<Startup>("http://+:7777"))
            {
                Console.WriteLine("Server running...");
                Console.ReadLine();
            }
        }
    }
}
