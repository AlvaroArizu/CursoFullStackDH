// Definir express
const express = require('express');
const app = express();
const PORT = process.env.PORT|| 4005
const path = require('path');
const mainRoutes = require('./routers/mainRoutes');

//crea el ejs, le dice al proyecto que va a usar ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

//Aca van las rutas
app.use(mainRoutes);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});



