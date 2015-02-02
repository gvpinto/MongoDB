// Inserting records. Eg. 3. Changing the code to handle the error

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;
	
	var student = {'_id': 'Calvin', 'age': 6};

	db.collection('students').insert(student, function(err, inserted) {

		if (err) {
			console.log(err.message);
			return db.close();
		};
		
		console.log('Record has been sucessfully inserted: ' + JSON.stringify(inserted));
		return db.close();
		
	});

	
});