using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.Entities
{
    public class Player
    {
        public int PlayerID { get; set; }
        public string Username { get; set; }
        public double Score { get;set; }
        public BankAccount BankAccount { get; set; }

        public Player()
        {
            BankAccount = new BankAccount();
        }
    }
}
