const mysql = require('mysql');


const mysql_connection = mysql.createConnection({
    host: 'localhost',
    database: 'ejemplo',
    user: 'root',
    password: ''
});


mysql_connection.connect(error => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("La conexion a la base de datos se logro con exito.");
    }
});


module.exports = mysql_connection;

