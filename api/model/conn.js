var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "faoziaziz",
    password: "Azizkeren1234",
    database: "db_tester"
});

con.connect(function(err){
    if(err)throw err;
});

module.exports=con;