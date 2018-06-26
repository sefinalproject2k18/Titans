using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.Entities
{
    public class Game
    {
        public int GameID { get; set; }
        public List<Player> Players { get; set; }

        public Game()
        {
            Players = new List<Player>();
        }
    }
}
