// Using $regex for querying data

var MongoClient = require('mongodb').MongoClient,
request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;

	var query = {'title': {'$regex': 'Bay'}};
	var projection = {'title': 1, '_id': 0};

	db.collection('reddit').find(query, projection).each(function(err, doc) {

		if (err) throw err;
		
		if (doc == null) {
			db.close()
		}
		console.dir(doc);

	});
	
});