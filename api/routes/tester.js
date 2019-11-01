var express = require('express');
var router = express.Router();
var testerCont = require('../controller/tester')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Testers' });
});

/* Array of get tester. */
router.get('/testerget', testerCont.testerGet);
router.get('/testerget2', testerCont.testerGet2);
router.get('/testerget3', testerCont.testerGet3);

/* Array of post tester. */
router.post('/testerpost', testerCont.testerPost);
router.post('/testerpost2', testerCont.testerPost2);
router.post('/testerpost3', testerCont.testerPost3);

module.exports = router;
