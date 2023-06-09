const express = require('express');
const app = express();
const path = require('path')
const PORT = 3400

const publicPath = path.resolve(__dirname, './Public')
app.use(express.static(publicPath))


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

