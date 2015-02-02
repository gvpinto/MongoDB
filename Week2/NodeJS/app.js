// Inserting records. Eg. 5. Inserting multiple documents with _id but varying case

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	
	if (err) throw err;
	
	var students = [{'_id': 'Renee', 'age': 13}, 
					{'_id': 'renee', 'age': 14}];

	db.collection('students').insert(students, function(err, inserted) {

		if (err) {
			console.log(err.message);
			return db.close();
		};
		
		console.log('Record has been sucessfully inserted: ' + JSON.stringify(inserted));
		return db.close();
		
	});

	
});