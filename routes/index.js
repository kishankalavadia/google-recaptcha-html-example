var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Generate Token', siteKey: process.env.SITE_KEY });
});

module.exports = router;
