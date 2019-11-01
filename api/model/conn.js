var mysql = require('mysql');

var con = mysql.createConnection({
    host: "labseni.com",
    user: "intankusuma",
    password: "intancantik",
    database: "db_tester",
    port: 12345
});

con.connect(function(err){
    if(err)throw err;
});

module.exports=con;