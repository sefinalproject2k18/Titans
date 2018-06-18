using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.Entities
{
    
    public static class GameContainer
    {
        private static List<Game> games = new List<Game>();

        public static List<Game> Games { get => Games; set => Games = value; }

        //ToDo.. add portfolio
    }
}
