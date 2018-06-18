using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.Entities
{
    public struct Game
    {
        public long GameID { get; set; }
        public static List<Player> Players { get; set; }

       
    }
}
