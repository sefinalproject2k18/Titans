var jsonfile = require('jsonfile');
var bankModule = require("./BankAccount.js");
function buyShares(PlayerID, GameID,Username, Stock, Qty, Price) {
    //widhraw funds

    var amount = Qty * Price;
    var res = bankModule.withdrawBankAccount(GameID, PlayerID, amount);
    if (res == "error") {
        return res;
    }
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
    jsonfile.writeFile("./JSON/Portfolio.json", portfolio, function(err) {
        console.error(err)
    });
    return;
}

function sellShares(PlayerID, GameID, Stock, Qty, Price) {
    //widhraw funds
    var hasstock = false;
    var amount = Qty * Price;
   
    var portfolio = jsonfile.readFileSync("./JSON/Portfolio.json");
    for (var i = 0; i < portfolio.length; i++) {
        if (portfolio[i].GameID == GameID && portfolio[i].PlayerID == PlayerID && portfolio[i].Stock == Stock) {
           
            var remender = Qty;
            for (var i = 0; i < portfolio[i].Values.length; i++) {
                if (!(remender == 0)) {
                    if (portfolio[i].Values.Qty >= remender) {
                        portfolio[i].Values.Qty = portfolio[i].Values.Qty - remender;
                        remender = 0;
                        hasstock = true;
                    }
                    else {

                        remender = remender - portfolio[i].Values.Qty;
                        if (remender < 0) {
                            return "error";
                        }
                        portfolio[i].Values.Qty = 0;

                    }
                }
            }
            if (!hasstock) {
                return "error";
            }
            else {
                bankModule.depositBankAccount(GameID, PlayerID, amount);
            }
        }
    }

    jsonfile.writeFile("./JSON/Portfolio.json", portfolio, function(err) {
        console.error(err)
    });
    return;
}
module.exports = {

};
