// Skip limit and Sort. Eg. 2

var MongoClient = require('mongodb').MongoClient,
request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;

	var grades = db.collection('grades');
	var cursor = grades.find({});
	cursor.sort({'grade': 1});
	cursor.limit(4);
	cursor.skip(1);
	
	cursor.each(function(err, doc) {

		if (err) throw err;
		
		if (doc == null) {
			return db.close()
		}
		
		console.dir(doc);

	});
	
});