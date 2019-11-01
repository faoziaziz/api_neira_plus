var express = require('express');
var router = express.Router();

var advCont = require('../controller/adv')

/* GET home page. */
router.get('/info', function(req, res, next) {
  res.render('index', { title: 'Info from Adv' });
});



router.get('/pub', advCont.pubGet);

router.get('/sub', advCont.subGet);


module.exports = router;
