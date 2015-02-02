// Skip limit and Sort. Eg. 4

var MongoClient = require('mongodb').MongoClient,
request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;

	var grades = db.collection('grades');
	var cursor = grades.find({});
	//cursor.sort({'grade': 1});
	//cursor.sort('grade', 1);
	cursor.limit(4);
	cursor.skip(1);
	
	// Sort Order in an Array does not change when it gets to the database
	//cursor.sort([['grade', 1], ['student', -1]]);
	
	// Do not use Object as the sort attribute order can change
	//cursor.sort({'grade': 1, 'student': -1});
	var options = {
		'limit': 4,
		'skip': 1,
		'sort': [['grade', 1], ['student', -1]]};
		
	var cursor = grades.find({}, {}, options);
	
	cursor.each(function(err, doc) {

		if (err) throw err;
		
		if (doc == null) {
			return db.close()
		}
		
		console.dir(doc);

	});
	
});