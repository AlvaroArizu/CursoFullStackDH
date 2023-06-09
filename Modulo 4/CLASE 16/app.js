//Levantar un servidor
const express = require('express');
const app = express();
const path =require('path');

app.get('/', (req, res) => {
    res.send("Hi world")
});



app.listen(3600, () => {
    console.log("Server running in port 3600");
});

//npm i nodemon -D


const publicPath = path.resolve(__dirname, './Public') ;
app.use( express.static(publicPath));


app.get('/', (req, res) =>{
    res.sendFile('./views/home.html');
})
