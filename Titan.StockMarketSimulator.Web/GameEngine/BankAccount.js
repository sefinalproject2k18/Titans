var jsonfile = require('jsonfile');

function createAccount(GameID, PlayerID, Username) {

    var BankAccounts = jsonfile.readFileSync("./JSON/BankAccount.json");
    for (var i = 0; i < BankAccounts.length; i++) {
        if (BankAccounts[i].Username == Username) {
            return "Bank account is already exist!";
        }
    }
    var Account =
        {
            GameID: GameID,
            PlayerID: PlayerID,
            Balance: 1000.00
        };
    BankAccounts.push(Account);

    jsonfile.writeFile("./JSON/BankAccount.json", Account, function (err) {
        console.error(err)
    });
}

function depositBankAccount(GameID, PlayerID, Amount) {
    var bankAccounts = jsonfile.readFileSync("./JSON/BankAccount.json");
    var bal = 0;
    for (var i = 0; i < BankAccount.length; i++) {
        if (bankAccounts[i].GameID == GameID && bankAccounts[i].PlayerID == PlayerID) {
            bankAccounts[i].Balance = bankAccounts[i].Balance + Amount;
            bal = bankAccounts[i].Balance;
            break;
        }
    }
    console.log("Withdraw " + Amount + "After " + bal);
    jsonfile.writeFile("./JSON/BankAccount.json", bankAccounts, function (err) {
        console.error(err)
    });
    return bal;
}

function withdrawBankAccount(GameID, PlayerID, Amount) {
    var bankAccounts = jsonfile.readFileSync("./JSON/BankAccount.json");
    var bal = 0;
    for (var i = 0; i < BankAccount.length; i++) {
        if (bankAccounts[i].GameID == GameID && bankAccounts[i].PlayerID == PlayerID) {

            if (bankAccounts[i].Balance > Amount) {
                bankAccounts[i].Balance = bankAccounts[i].Balance - Amount;
                bal = bankAccounts[i].Balance;
                break;
            }
            else {
                return "error";
            }


        }
    }
    console.log("Withdraw " + Amount + "After " + bal);
    jsonfile.writeFile("./JSON/BankAccount.json", bankAccounts, function (err) {
        console.error(err)
    });
    return bal;
}

function getBalance(GameID, PlayerID) {
    var bankAccounts = jsonfile.readFileSync("./JSON/BankAccount.json");

    for (var i = 0; i < BankAccount.length; i++) {
        if (bankAccounts[i].GameID == GameID && bankAccounts[i].PlayerID == PlayerID) {
            return bankAccounts[i].Balance;
        }
        return "error";
    }
}

function logTransaction(GameID, PlayerID, Amount, Transactiontype) {
    var log = jsonfile.readFileSync("./JSON/TransactionLog.json");
    var trans =
        {
            GameID: GameID,
            PlayerID: PlayerID,
            Type: Transactiontype,
            Amount: Amount
        };

    log.push(trans);
    jsonfile.writeFile("./JSON/BankAccount.json", log, function (err) {
        console.error(err)
    });
}

module.exports = {
    createAccount: createAccount,
    depositBankAccount: depositBankAccount,
    withdrawBankAccount: withdrawBankAccount,
    getBalance: getBalance
};
