// Inserting records

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;
	
	var student = {'name': 'Calvin', 'age': 6};

	db.collection('students').insert(student, function(err, inserted) {

		if (err) throw err;
		
		console.log('Record has been sucessfully inserted: ' + JSON.stringify(inserted));
		return db.close();
		
	});

	
});