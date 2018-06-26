using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Titan.StockMarketSimulator.Web.Controllers
{
    public class GameController : Controller
    {
        //
        // GET: /Game/

            [HttpPost]
        public ActionResult GameBoard()
        {
            //txtUsrname
            ViewBag.Usrname = Request.Form["username"];
            return View();
        }

    }
}
