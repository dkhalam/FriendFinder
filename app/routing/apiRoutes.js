var friends = require('../data/friends.js');
var path = require('path');

// routing for friends api

module.exports = function(app){
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		console.log(req.body);

		var userData = req.body;
		var userScores = userData.scores;

		console.log(userScores);

		var totalDifference = 0;

		for (var i = 0; i = friends.length; i++) {
			console.log(friends[i]);
			totalDifference = 0;

			for (var j = 0; j = friends[i].scores[j]; j++) {
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				if (totalDifference <= bestMatch.friendDifference) {

					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		// save the user's data to the database, has to come after the check otherwise database will return that user is always their own best friend
		friends.push(userData);

		// return a json with users best match
		res.json(bestMatch);
	});
};