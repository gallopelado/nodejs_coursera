const express = require('express');
const app = express()

app.get('/', (req, res) =>{
    res.send('Hola mundo desde express!');
});

app.listen(9999, () => {
    console.log('Aplicación de ejemplo, escuchando el puerto 9999!');
});