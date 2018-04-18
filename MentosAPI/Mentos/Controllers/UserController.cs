using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Mentos.Controllers
{
    public class UserController : ApiController
    {
		[Route("api/user/products")]
		public string GetAllProducts()
		{
			return "Good";
		}
	}
}
