const express = require('express');
const router = express.Router();

const mysql_connection = require('../database');

//rutas de prueba 
router.get('/', (req, res) => {
    res.json(
        "Josue"
    );
});


//Rutas reales 
router.get('/personas', (req, res) => {
    mysql_connection.query('SELECT * FROM PERSONAS', (error, rows, fields) => {
        if (!error) {
            res.json(rows);
        }
        else {
            console.log(error);
        }
    });
});

//Rutas por post
router.post('/agregar-persona', (req, res) => {
    const { nombre, apellido, edad } = req.body;

    const query = "INSERT INTO PERSONAS (NOMBRE, APELLIDO, EDAD) VALUES (?, ?, ?)";
    mysql_connection.query(query, [nombre, apellido, edad], (error, rows, fields) => {
        if (!error) {
            res.json({
                "Status": "Se ha agregado la persona exito."
            });
        }
        else {
            res.json({
                "Status": "No se ha podido agregar a la persona. " + error
            });
        }
    });
});


//Ruta por put 
router.put('/update-persona/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, apellido, edad } = req.body;

    const query = "UPDATE PERSONAS SET NOMBRE = ?, APELLIDO = ?, EDAD = ? WHERE ID = ?";
    mysql_connection.query(query, [nombre, apellido, edad, id], (error, rows, fields) => {
        if (!error) {
            res.json({
                "Status": "Se ha actualizado el registro."
            });
        }
        else {
            res.json({
                "Status": "No se ha podidoactualizar el resgistro."  + error
            });
        }
    });

});


//Ruta por delete 
router.delete('/delete-persona/:id', (req, res) => {
    const id = req.params.id;

    const query = "DELETE FROM PERSONAS WHERE ID = ?";

    mysql_connection.query(query, [id], (error, rows, fields) => {
        if (!error) {
            res.json({
                "Status": "Se ha borrado la persona."
            });
        }
        else {
            res.json({
                "Status": "No se ha borrado la persona."  + error
            });
        }
    });

});


module.exports = router;

