using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.Entities
{
    public static class StockMarket
    {
        public static int Events = 5;
        public static int[] SectorTrend = { -3, -2, -1, 0, 1, 2, 3 };
        public static int[] MarketTrend = { -3, -2, -1, 0, 1, 2, 3 };
        public static int[] RandomTrend = { -2, -1, 0, 1, 2 };
    }
}
