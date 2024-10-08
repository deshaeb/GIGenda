const express = require('express');
const router = express.Router();
const User = require('../models/user')
//const ensureLoggedIn = require('../middleware/ensureLoggedIn');


// GET /gigs (index functionality/ action)
router.get('/', (req, res) => {
  res.render('gigs/index.ejs', {
    gigs: []
  });
});

//GET /gigs/new (new functionality)
router.get('/new', (req, res) => {
  res.render('gigs/new.ejs')
});

//GET /gigs/:gigId (show functionality/action)
router.get('/:gigId', (req, res) => {
  const gig = req.user.gigs.id(req.params.gigId)
  res.render('gigs/show.ejs', { gig });
});

//GET /gigs/:gigId/edit (edit functionality/action)
router.get('/:gigId/edit', (req, res) => {
  const gig = req.user.gigs.id(req.params.gigId)
  res.render('gigs/edit.ejs', { gig });
});

//POST /gigs (create functionality/ action)
router.post('/', async (req, res) => {
  try {
    console.log(req.body.agenda)
    req.user.gigs.push(req.body);
    await req.user.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect('/gigs');
});

//DELETE /gigs/:gigId (delete functionality/action)
router.delete('/:gigId', async (req, res) => {
  req.user.gigs.pull(req.params.gigId);
  await req.user.save();
  res.redirect('/gigs');
});

//PUT /gig/:gigId (update functionality/action)
router.put('/:gigId', async (req, res) => {
  const gig = req.user.gigs.id(req.params.gigId);
  gig.set(req.body);
  await req.user.save();
  res.redirect(`/gigs/${gig._id}`);
});

module.exports = router;