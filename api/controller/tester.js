

exports.testerGet = function(req, res){
    res.send("testing get berhasil");
}


exports.testerGet2 = function(req, res, next){
    res.send("ini get yang kedua dengan param");
}

exports.testerGet3 = function(req, res, next){
    res.send("ini get yang ketiga dengan params octet string");
}


exports.testerPost = function(req, res, next){
    res.send("post berhasil");
}

exports.testerPost2 = function(req, res, next){
    res.send("post dengan params");
}

exports.testerPost3 = function(req, res, next){
    res.send("post dengan octet string");

}
