var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/question', function(req, res, next) {
  res.render('question');
});
module.exports = router;
