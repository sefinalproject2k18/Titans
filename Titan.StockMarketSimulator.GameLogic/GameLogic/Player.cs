using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.GameLogic
{
    public class Player
    {
        /// <summary>
        /// To get all connected players
        /// </summary>
        /// <returns>
        /// All active players
        /// </returns>
        //public List<Entities.Player> GetPlayers()
        //{
        //    var allPlayers = new List<Entities.Player>();
        //    foreach (Entities.Game game in Entities.GameContainer.Games)
        //    {
        //        allPlayers.AddRange(game.Players);
        //    }
        //    return allPlayers;
        //}

        /// <summary>
        /// To get all connected players to a game
        /// </summary>
        /// <param name="gameID">
        /// ID of the game
        /// </param>
        /// <returns>
        /// List<Entities.Player>
        /// </returns>
        //public List<Entities.Player> GetPlayers(long gameID)
        //{
        //    var allPlayers = new List<Entities.Player>();
        //    foreach (Entities.Game game in Entities.GameContainer.Games.Where(x=>x.GameID==gameID))
        //    {
        //        allPlayers.AddRange(game.Players);
        //    }
        //    return allPlayers;
        //}
        public void AddPlayer(int PlayerID)
        {
           
        }
    }
}
