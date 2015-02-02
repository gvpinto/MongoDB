// Inserting records. Eg. 2. Providing an _id value and trying to insert it twice

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;
	
	var student = {'_id': 'Calvin', 'age': 6};

	db.collection('students').insert(student, function(err, inserted) {

		if (err) throw err;
		
		console.log('Record has been sucessfully inserted: ' + JSON.stringify(inserted));
		return db.close();
		
	});

	
});