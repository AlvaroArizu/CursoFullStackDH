const express = require('express');

/express es una fx/

const app = express();

app.listen(3000, () => console.log('Esto fue exitoso'));


app.get('/', function(req, res){
    res.send('Bienvenidos al sitio');

});

app.get('/contacto', function(req, res){
    res.send('Dejanos tu contacto');

});

app.get('/un-array', function(req, res){
    res.send([1, 2, 3, 4]);

});

app.get('/un-objeto', function(req, res){
    res.send({name: Alvaro});

});

/CARGAR UN ARCHIVO, CARGANDO PATH, con una ruta absoluta con path.resolve/

const path = require('path');
app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './index.html')
    res.sendFile(htmlPath);
    res.sendFile(path.resolve(__dirname, './index.html'))

});
