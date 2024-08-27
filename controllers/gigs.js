const express = require('express');
const router = express.Router();
const User = require('../models/user')
//const ensureLoggedIn = require('../middleware/ensureLoggedIn');

// All paths start with "/gigs"

// GET /gigs (index functionality/ action)
router.get('/', (req, res) => {
  res.render('gigs/index.ejs', {
    gigs: []
  });
});

//GET /gigs/new (new functionality)
router.get('/new', (req,res) => {
  res.render('gigs/new.ejs')
})

module.exports = router;