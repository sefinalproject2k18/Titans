var app = require('express')();
var http = require('http').Server(app);
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var querystring = require('querystring');
var io = require('socket.io')(http);
var uniqid = require('uniqid');

var playersCount = 0;
var players = [];
var games = [];
io.on('connection', function (socket) {
    playersCount++;
    console.log('A player connected ' + socket.handshake.address + " count " + playersCount);
    players.push(
        {
            PlayerIP: socket.handshake.address,
            PlayerID: socket.id,
            Username: socket.request._query['username'],
            GameID: 0
        }
    );
    
    if (players.length == 5) {
        var gameID = uniqid();
        console.log(players);
        for (var i = 0; i < 5; i++) {
            players[i].GameID = gameID;
            games.push(
                {
                    PlayerID: players[i].PlayerID ,
                    GameID: players[i].GameID
                }
            );
            io.to(players[i].PlayerID).emit(players[i])
            
        }
        players = players.slice(0, 4)
        console.log(players);
    }
    io.on('join', function (gameID) {
        socket.join(gameID);
       
    });
    socket.on('disconnect', function () {
        players--;
        console.log('A user disconnected ' + socket.handshake.address);
    });
});



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


http.listen(3000, function () {
    console.log('listening on *:3000');
});