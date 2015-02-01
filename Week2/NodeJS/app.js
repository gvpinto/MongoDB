// Using $regex for querying data using Regular Expression
// curl http://www.reddit.com/r/technology/.json > reddit.json
// http://www.reddit.com/r/videos/.json

var MongoClient = require('mongodb').MongoClient,
request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;
	
	request('http://www.reddit.com/r/videos/.json', function(err, response, body) {
		
		if (!err && response.statusCode == 200) {
			var obj = JSON.parse(body);
			
			var stories = obj.data.children.map(function(story) {
				return story.data;
			});

			db.collection('reddit').insert(stories, function(err, data) {
		
				if (err) throw err;
				console.dir(data);
				db.close();

			});
			
			
		}
		
		
	});
	
	
});