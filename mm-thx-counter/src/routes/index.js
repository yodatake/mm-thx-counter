var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('OK', 200);
});
/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.staus(200).send('OK');
});

module.exports = router;
