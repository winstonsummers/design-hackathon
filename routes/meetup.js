//this is where our api calls to meet up will 
//come in and send data back to the front end
//should be a get route
//we may want to install axios
require('dotenv').config();
var express = require('express');
var router = express.Router();
var meetup = require('meetup-api')({
	key: process.env.MEETUP_KEY
})


router.post('/meets', function(req,res,cb){
	console.log('########### Meetup route!', req.body);
	parameters = {
		zip: req.body.location
	}
	meetup.getOpenEvents(parameters, function(err, resp) {
		console.log("reeeeespone", resp, err);
		res.json(resp);
	});
});



module.exports = router;