var connection = require('../model/conn')
var uuidv1 = require('uuid/v1')

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
    var UUID_gen  = uuidv1();

    console.log("masuk ke connection");
    /*write to db tester*/
    connection.connnect(function (err){
        console.log("weew");
        var sql = "insert into Tester(UUID, param1, param2) values ()";
        var values = [UUID_gen, param1, param2];

        console.log(values);

        /* enter connection to query */
        connection.query(sql, [values], function (err, result){
            if (err) throw err;

            console.log("Record berhasil ");
            res.send("param1 : "+param1);
            console.log("the blob data :"+param2);
        });


    });

    
    
}

exports.testerGet4 = function(req, res, next){
    var param1 = req.param('param1');
    var param2 = req.param('param2');
    
    
    var data = {
        'status': 200,
        'values': param1
    }
    res.json(data);
    res.end();
    console.log("Look on the lol"+param1+" "+param2);
}

exports.testerGetAndPost = function(req, res, next){
    res.send("from tester get and post");
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
