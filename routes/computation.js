var express = require('express');
var router = express.Router();
var x=1;
var y=0;

/* GET home page. */
router.get('/', function(req, res, next) {
  y=Math.atan(x);
  res.send(`[fn] applied to [${x}] is [${y}] `);
});

module.exports = router;
