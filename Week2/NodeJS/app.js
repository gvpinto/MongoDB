// Inserting records. Eg. 4. Inserting multiple documents

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;
	
	var students = [{'student': 'Calvin', 'age': 6}, 
					{'student': 'Amy', 'age': 7}];

	db.collection('students').insert(students, function(err, inserted) {

		if (err) {
			console.log(err.message);
			return db.close();
		};
		
		console.log('Record has been sucessfully inserted: ' + JSON.stringify(inserted));
		return db.close();
		
	});

	
});