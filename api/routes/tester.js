var express = require('express');
var router = express.Router();
var testerCont = require('../controller/tester')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Testers' });
});

router.get('/tester', testerCont.testerGet);

module.exports = router;
