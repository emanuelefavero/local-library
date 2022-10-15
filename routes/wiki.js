const express = require('express')
const router = express.Router()

// Home page route - GET /wiki
router.get('/', (req, res) => {
  res.send('Wiki home page')
})

// About page route - GET /wiki/about
router.get('/about', (req, res) => {
  res.send('About this wiki')
})

// TIP: Route Paths also accepts regular expressions!
// router.get(/.*world/, (req, res) => {
//   res.send('Hello World!')
// })

module.exports = router
