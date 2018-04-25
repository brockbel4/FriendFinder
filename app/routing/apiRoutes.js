var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.send(friends.getFriends());
    });
    app.post('/api/friends', function(req, res){
        console.log(req.body);
        res.send(friends.addFriends(req.body));
    });
};