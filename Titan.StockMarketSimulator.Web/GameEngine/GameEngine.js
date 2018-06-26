var jsonfile = require('jsonfile')
var app = require('express')();
var http = require('http').Server(app);
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var querystring = require('querystring');
var io = require('socket.io')(http);
var uniqid = require('uniqid');
var bankModule = require("./BankAccount.js");
//io.set('origins', 'www.mydomain.com:80');
io.on('connection', function (socket) {
    var players = jsonfile.readFileSync("./JSON/Players.json");

    var player =
        {
            PlayerIP: socket.handshake.address,
            PlayerID: socket.id,
            Username: "",
            GameID: 0

        };
    players.push(player);
    jsonfile.writeFile("./JSON/Players.json", players, function (err) {
        console.error(err)
    });
    io.to(player.PlayerID).emit("Connect", player.PlayerID)

    //console.log('A player connected ' + socket.handshake.address + " count " + playersCount);
    socket.on("buyShares", function (data) {
        var company = data.Company;
    });
    socket.on('registerPlayer', function (playerData) {
        var players = jsonfile.readFileSync("./JSON/Players.json");
        var games = jsonfile.readFileSync("./JSON/Games.json");
        var playersCount = jsonfile.readFileSync("./JSON/PlayerCount.json");
        playersCount++;
        jsonfile.writeFile("./JSON/PlayerCount.json", playersCount, function (err) {
            console.error(err)
        });
        console.log(playersCount);
        for (var i = 0; i < players.length; i++) {
            if (players[i].PlayerID == playerData.PlayerID) {
                players[i].Username = playerData.Username
                break;
            }
        }

        console.log(players);

        if (playersCount == 5) {
            var gameData = getRandomStockValues();
            var gameID = uniqid();
            for (var i = 0; i < 5  ; i++) {
                players[i].GameID = gameID;
                console.log(gameID);
                players[i].Username = "";
                games.push(
                    {
                        PlayerID: players[i].PlayerID,
                        GameID: players[i].GameID,
                        PlayerIP: players[i].PlayerIP,
                        Username: players[i].Username
                    }
                );
                socket.join(gameID);

                jsonfile.writeFile("./JSON/PlayerCount.json", 0, function (err) {
                    console.error(err)
                });

                io.to(players[i].PlayerID).emit("JoinGame", { gameID: players[i].GameID, gameData: gameData })
                
                if (players == null || players == "") {
                    console.log("test " + players)
                    players = [];
                }
                
            }
            players.splice(0, 5);
            console.log("spliced \n" + players)
            jsonfile.writeFile("./JSON/Players.json", players, function (err) {
                console.error(err);
            });
           
        }
        console.log(players);
        jsonfile.writeFile("./JSON/Players.json", players, function (err) {
            console.error(err)
        });

    });
    socket.on('joinGame', function (gameID) {

    });

    socket.on('disconnect', function () {

        console.log('A user disconnected ' + socket.handshake.address);
    });
});






function ResolveUsername(usrname, indexarray) {
    var randomIndex = Math.floor(Math.random() * indexarray.length);
    usrname = usrname + "_" + indexarray[randomIndex];
    indexarray.splice(randomIndex, 1);
    return usrname;
}

function PostRequest(data) {

    var url = "http://localhost:4928/api/Player";

    xhr.open('POST', url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    //xhr.setRequestHeader("data", querystring.stringify({ "value": data }));
    xhr.onreadystatechange = function () {//Call a function when the state changes.
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
        console.log(xhr.responseText);

    }


}


http.listen(8081, function () {
    console.log('listening on *:8080');
});