using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.Entities
{
    public static class GameContainer
    {
        private static List<Player> players = new List<Player>();

        public static List<Player> Players { get => players; set => players = value; }
    }
}
