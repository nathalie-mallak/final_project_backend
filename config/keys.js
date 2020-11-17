const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://nat:A2V9R99N@cluster0.bn5wi.mongodb.net/final_project?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })


const dbConnect = () => {

	//Get the default connection
	let db = mongoose.connection;
	console.log('mongoDB is connected');
	//Bind connection to error event (to get notification of connection errors)
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	}
	
module.exports=dbConnect;
