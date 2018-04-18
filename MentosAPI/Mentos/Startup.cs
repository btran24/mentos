using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Mentos.Startup))]
namespace Mentos
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
