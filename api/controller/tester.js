
/*
    Declaration for require variable
*/

var connection = require('../model/conn')
var uuidv1 = require('uuid/v1')
var binary = require('binary')



exports.testerGet2 = function(req, res, next){
    var param2 = req.param('param2');
    res.send("param2 : "+param2);
}

exports.testerGet3 = function(req, res, next){
    var param1 = req.param('param1');
    var param2 = req.param('param2');
    var param3  = req.param('param3');
    var UUID_gen  = uuidv1();

    console.log("masuk ke connection");
    /*write to db tester*/
    connection.connect(function (err){
        console.log("weew");
        var sql = "insert into Tester(UUID, param1, param2, param3) values (?)";
        var values = [UUID_gen, param1, param2, param3];

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


//
exports.testerGet4 = function(req, res, next){
    /* some methode parameter needed by */
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

exports.testerGetBlob = function(req, res, next){
    res.send("tester to  blob");
}
exports.testerPostBlob = function(req, res, next){

    /* body name buff */
    var body = req.body.name;
    var buf = new Buffer(body.toString('binary'),'binary');
    //var buf = new Buffer(body, 'binary');

    console.log('body', req.body);
    console.log('req body len', body.length);
    console.log('buf len', buf.length);

    var g = binary.parse(buf)
    .word16bu('a')
    .word16bu('b').vars

    console.log('g.a', g.a);
    console.log('g.b', g.b);
 

    res.send("post blob file tester");
    console.log("not implement yet : "+body);


}
exports.testerGetAndPost = function(req, res, next){
    /* some get and post method to testing and running with only one the sight */
    res.send("from tester get and post");
}
exports.testerPost = function(req, res, next){

    /* other and the display oge */
    res.send("post berhasil");
}

exports.testerPost2 = function(req, res, next){
    var param1 = req.param('param1');
    res.send("post dengan params : "+param1);
}


exports.testerPost3 = function(req, res, next){
    /* param1 dan param2 */
    var param1 = req.param('param1');
    var param2 = req.param('param2');
    var param3 = req.param('param3');
    var UUID_gen = uuidv1();

    connection.connect(function (err){
        console.log("weew");
        var sql = "insert into Tester(UUID, param1, param2, param3) values (?)";
        var values = [UUID_gen, param1, param2, param3];

        console.log(values);

        /* enter connection to query */
        connection.query(sql, [values], function (err, result){
            if (err) throw err;

            console.log("Record berhasil ");
            res.send("param1 : "+param1);
            console.log("the blob data :"+param2);
        });
        console.log("dingin dingin dimandiin nanti masuk angin");


    });


    //res.send("post dengan octet string"+param1);
    console.log(param2);

}
