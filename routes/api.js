const express = require('express');
const router = express.Router();
const Music = require('../models/music');

//get a list of music from db
router.get('/musics',function(req, res, next){
	Music.find({}).then(function(musics){
		res.send(musics);
	});
});


//add a new song in db
router.post('/musics',function(req, res, next){
	Music.create(req.body).then(function(music){
		res.send(music);
	}).catch(next);
});


// update a song in db
router.put('/musics/:id',function(req, res, next){
	Music.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Music.findOne({_id: req.params.id}).then(function(music){
			res.send(music);
		});
	});	
});


// delete a song from db
router.delete('/musics/:id',function(req, res, next){
	Music.findByIdAndRemove({_id: req.params.id}).then(function(music){
		res.send(music);
	})
});


module.exports = router;