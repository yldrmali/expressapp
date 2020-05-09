var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index router is required')
  res.redirect('/catalog');
});

module.exports = router;
