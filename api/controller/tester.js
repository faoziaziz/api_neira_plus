

exports.testerGet = function(req, res){
    
    res.send("testing get berhasil");
}


exports.testerGet2 = function(req, res, next){
    var param2 = req.param('param2');
    res.send("param2 : "+param2);
}

exports.testerGet3 = function(req, res, next){
    var param1 = req.param('param1');
    var param2 = req.param('param2');
    res.send("param1 : "+param1);
    console.log("the blob data :"+param2);
    
}


exports.testerPost = function(req, res, next){
    res.send("post berhasil");
}

exports.testerPost2 = function(req, res, next){
    var param1 = req.param('param1');
    res.send("post dengan params : "+param1);
}

exports.testerPost3 = function(req, res, next){
    var param1 = req.param('param1');
    var param2 = req.param('param2');

    res.send("post dengan octet string"+param1);
    console.log(param2);

}
