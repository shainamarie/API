const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create music Schema and model
const MusicSchema = new Schema({
	title:{
		type: String,
		required: [true,'Title field is required..']
	},
	genre:{
		type: String,
		required: [true, 'Genre field is required..']
	},
	available:{
		type: Boolean,
		default: false
	}
});


const Music = mongoose.model('music', MusicSchema);


module.exports = Music