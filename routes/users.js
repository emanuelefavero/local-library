var express = require('express')
var router = express.Router()

// GET users listing - GET /users
router
  .get('/', (req, res, next) => {
    res.send('respond with a resource')
    // next()
  })
  .get('/cool', (req, res, next) => {
    res.send("You're so cool")
  })

module.exports = router
