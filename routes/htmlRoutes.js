// Dependencies
// Require path to make the absolute path relative
const path = require('path')
// Require
const router = require('express').Router()

// Routes

// send the  exercise.html file
router.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
})
// send the  stats.html file
router.get('/stats', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
})

// The index route redirects to /index route
router.get('/index', (req, res) => res.redirect('/'))

module.exports = router
