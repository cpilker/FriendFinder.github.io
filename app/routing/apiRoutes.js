var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res) {
        console.log("post to friends has fired!")
        friendsData.push(req.body);
    });

}