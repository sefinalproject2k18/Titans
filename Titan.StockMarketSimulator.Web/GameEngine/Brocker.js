var jsonfile = require('jsonfile');
var bankModule = require("./BankAccount.js");
function buyShares(PlayerID,GameID,Stock,Qty, Price) {
    //widhraw funds
    var amount = Qty * Price;
    bankModule.withdrawBankAccount(GameID, PlayerID, amount);
    var portfolio = jsonfile.readFileSync("./JSON/Portfolio.json");
    for (var i = 0; i < portfolio.length; i++) {
        if (portfolio[i].GameID == GameID && portfolio[i].PlayerID == PlayerID && portfolio[i].Stock == Stock) {
            portfolio[i].Values.push({
                Qty: Qty,
                Price: Price
            });
            return;
        }
    }
    portfolio.push({
        GameID: GameID,
        PlayerID: PlayerID,
        Stock: Stock,
        Values=[{
            Qty: Qty,
            Price: Price
        }]
    });

    return;
}

function sellShares(PlayerID, GameID, Stock, Qty, Price) {
    //widhraw funds
    var amount = Qty * Price;
    bankModule.withdrawBankAccount(GameID, PlayerID, amount);
    var portfolio = jsonfile.readFileSync("./JSON/Portfolio.json");
    for (var i = 0; i < portfolio.length; i++) {
        if (portfolio[i].GameID == GameID && portfolio[i].PlayerID == PlayerID && portfolio[i].Stock == Stock) {
            var reminder = 0;
            for (var i = 0; i < portfolio[i].Values.length; i++) {
                
            }
            return;
        }
    }
  

    return;
}
module.exports = {
   
};
