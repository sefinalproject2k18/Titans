using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.GameLogic
{
    public class StockMarketLogic
    {

        public List<Entities.Sector> GetSectorList()
        {
            foreach (Enum sec in Enum.GetValues(typeof(Entities.Sector.Sectors)))
            {
                int[] CompanyValues = null;
                foreach (Enum com1 in Enum.GetValues(typeof(Entities.Company.ICT)))
                {
                    CompanyValues = new int[10];
                    for (int i = 0; i < 10; i++)
                    {
                        CompanyValues[i] = GetRandomValue();
                    }
                }

                foreach (Enum com2 in Enum.GetValues(typeof(Entities.Company.FoodBeverages)))
                {
                    CompanyValues = new int[10];
                    for (int i = 0; i < 10; i++)
                    {
                        CompanyValues[i] = GetRandomValue();
                    }
                }

                foreach (Enum com3 in Enum.GetValues(typeof(Entities.Company.Shipping)))
                {
                    CompanyValues = new int[10];
                    for (int i = 0; i < 10; i++)
                    {
                        CompanyValues[i] = GetRandomValue();
                    }
                }

                foreach (Enum com4 in Enum.GetValues(typeof(Entities.Company.Aviation)))
                {
                    CompanyValues = new int[10];
                    for (int i = 0; i < 10; i++)
                    {
                        CompanyValues[i] = GetRandomValue();
                    }
                }
            }
           


                return new List<Entities.Sector>();
        }

        public int GetRandomValue()
        {
            Random ran = new Random();

            int RandomSectorTrend = Entities.StockMarket.SectorTrend[ran.Next(Entities.StockMarket.SectorTrend.Length)];
            int RandomMarketTrend = Entities.StockMarket.MarketTrend[ran.Next(Entities.StockMarket.MarketTrend.Length)];
            int RandomTrend = Entities.StockMarket.RandomTrend[ran.Next(Entities.StockMarket.RandomTrend.Length)];

            int RandomValue = Entities.StockMarket.Events + RandomSectorTrend + RandomMarketTrend + RandomTrend;

            return RandomValue;
        }

    }
}
