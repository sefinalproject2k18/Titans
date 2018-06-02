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

        public ActionResult GameBoard(string txtUsrname)
        {
            //txtUsrname
            ViewBag.Usrname = txtUsrname;
            return View();
        }

    }
}
