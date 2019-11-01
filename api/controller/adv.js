exports.pullAdv = function(req, res, next){
    res.send("not implement yet")
}

exports.pubGet = function(req, res, next){
    res.send("pub ikan form get");
}

exports.subGet = function(req, res, next){
    data ={
        'silit' : 'mambu',
        'kentut': 'pakeubukano'
    }
    res.json(data);
    res.end();
}


