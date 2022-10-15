var express = require('express')
var router = express.Router()

// Home page route - GET /
router.get('/', (req, res, next) => {
  res.redirect('/catalog')
  // res.render('index', { title: 'Local Library' })
})

module.exports = router
