module.exports = function(app){
    var friends = [];
    return{
        getFriends: function(){
            return JSON.stringify(friends);
        },
        addFriends: function(data){
            var closeFriend = null;
            var closeDifference = 999;
            friends.forEach(function(friend){
                var difference = 0;
                console.log(friend);
                for(var i = 0; i < 10; i++){
                    difference += Math.abs(friend.scores[i] - data.scores[i]);
                };
                if(difference <= closeDifference){
                    closeFriend = friend;
                    closeDifference = difference;
                };
            });
            friends.push(data);
            return closeFriend;
        }
    }
}();