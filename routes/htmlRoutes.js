// Dependencies
const path = require('path')
const router = require('express').Router()

// Routes

// The route for creating exercise
router.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.get('/stats', function(req, res){
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

// The index route redirects to /index route
router.get('/index', (req, res) => res.redirect('/'))

module.exports = router
