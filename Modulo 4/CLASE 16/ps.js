const express = require('express');
const app = express();
const path = require("path")

app.get('/', (res, req) =>{
    let htmlPath = path.resolve(__dirname, "./index.html")
    res.sendFile(htmlPath);
});

app.get('/babbage', (res, req) =>{
    let htmlPath = path.resolve(__dirname, "./babbage.html")
    res.sendFile(htmlPath);
});

app.get('/berners-lee', (res, req) =>{
    let htmlPath = path.resolve(__dirname, "./barners-lee.html")
    res.sendFile(htmlPath);
});

app.listen(3030, function(){
    console.log("Levantnado un servidor con express");
})