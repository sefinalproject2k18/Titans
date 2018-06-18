using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;
using Titan.StockMarketSimulator.GameLogic.Entities;

namespace Titan.StockMarketSimulator.Web.Controllers
{
   
    public class PlayerController : ApiController
    {
        public class SocketData
        {
            public string PlayerID { get; set; }
            public string PlayerIP { get; set; }
            public string UserName { get; set; }
        }
        // GET api/player
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/player/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/player
        [HttpPost]
        public SocketData Post(HttpRequestMessage value)
        {
            var data = Json.Decode<SocketData>(Request.Content.ReadAsStringAsync().Result);

            //var games = GameContainer.Games;
            //var vacentGame = games.Where(x => x.Players.Count < 5).FirstOrDefault();
            //var player = new Player()
            //{
            //    IPAddress = data.PlayerIP,
            //    PlayerID = data.PlayerID,
            //    Score = 0,
            //    Username=data.UserName
            //};
            //if (vacentGame==null)
            //{
            //    //add a new game
            //    long gameID = games.Count == 0 ? 1 : games.Last().GameID + 1;
            //    games.Add(new Game()
            //    {
            //        GameID = gameID,
            //        Players = new List<Player>()
            //        {
            //           player
            //        }
            //    });

            //}
            //else
            //{
            //    //check if any games for player
            //        vacentGame.Players.Add(player);
            //    games.Remove(games.Where(game => game.GameID == vacentGame.GameID).Single());
            //    games.Add(vacentGame);
            //}
            return data;
        } 

        // PUT api/player/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/player/5
        public void Delete(int id)
        {
        }
    }
}
