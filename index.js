//Importar express
const express = require('express');
const app = express();


//Settings 
const puerto = process.env.PORT;
app.set('port', puerto || 3000);


app.use(express.json());


//Rutas 
app.use(require('./Routes/ejemplo'));


app.listen(app.get('port'), () => {
    console.log("El servidor esta corriendo.");
});

