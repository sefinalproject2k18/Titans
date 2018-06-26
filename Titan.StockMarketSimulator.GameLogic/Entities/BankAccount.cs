using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Titan.StockMarketSimulator.GameLogic.Entities
{
    public class BankAccount
    {
        public int PlayerID { get; set; }
        public int AccountID { get; set; }
        public int BalanceAmount { get; set; }
    }
}
