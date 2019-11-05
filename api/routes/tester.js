var multer = require('multer');
var express = require('express');
var router = express.Router();
var testerCont = require('../controller/tester')

/* Storage function */
var storage = multer.diskStorage({
  destination: function(req, file, cb){
      cb(null, 'uploads')
  },
  filename: function(req, file, cb){
      cb(null, file.filename+'-'+Date.now())
  }

});
var upload = multer({storage: storage})

exports.testerGet = function(req, res){
  
  res.send("testing get berhasil");
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Testers' });
});

/* Array of get tester. */
router.get('/testerget', testerCont.testerGet);
router.get('/testerget2', testerCont.testerGet2);
router.get('/testerget3', testerCont.testerGet3);
router.get('/testerget4', testerCont.testerGet4);
router.get('/testerBlob', testerCont.testerGetBlob);
router.get('/formupload', function(req, res, next){
  res.render('formupload', { title: 'Form upload'});
});
/* Array of post tester. */
router.post('/testerpost', testerCont.testerPost);
router.post('/testerblob', testerCont.testerPostBlob);
router.post('/testerpost2', testerCont.testerPost2);
router.post('/testerpost3', testerCont.testerPost3);

router.post('/uploadfile', upload.single('myFile'), (req, res, next)=>{
  const file = req.file
  if(!file){
    const error = new Error('Cuy filenya belum keupload')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
});

router.post('/uploadmutiple', upload.array('myFiles',12), (req,res, next)=>{
  const files = req.files;
  if(!files){
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(files)

});

module.exports = router;
