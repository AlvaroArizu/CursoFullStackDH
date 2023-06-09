/*
? ¿cómo podemos hacer para subir archivos y que los mismos se almacenen en el servidor?
*Instalando multer:
npm i multer --save

*En el router, para requerirlo
const multer = require('multer');

*En el form
<form action="/register" method="POST" enctype="multipart/form-data">

</form>

! Subiendo archivos
! Validación

!Subiendo Archivos:
Con este metodo permite definir el lugar del servidor donde va a almacenar los archivos procesados
Usando el metodo .diskStorage() que recibe como parametro un objeto literal con 2 propiedades: destination y filename


/Destination: permite definir la carpeta donde se va a alamacenar el archivo. Se usaran callback (cb) para definir la carpeta en donde queremos almacenar los archivos. El primer parametro sera null, el segundo la ruta hcia la carpeta de destino


/Filename: Permite indicar con que nombre se guardara ese archivo en el servidor. se usara un cb para definir el nombre con el que guardaremos el archivo. El primer parametro sera null y el segundo sera elnombre del archivo

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
},
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
}
})

var upload = multer({ storage: storage })


*Configurando la ruta

var upload = multer({ storage: storage });
app.post('/register', upload.single('avatarFile'), (req, res) => {
  console.log(req.file) // Nos devuelve un objeto con la información del archivo
    res.send('Archivo subido correctamente')
})
*Subiendo un archivo
Se usa .single('nombre'), donde nombre debe coincidir con el atributo name del input del formulario

*Subiendo multiples archivos
Se usa .array('nombre'), en el input debe coincidir el name con el nombre y debe tener la propiedad multiple

? <input type="file" name="avatarFiles" id="file"  multiple>html

? var upload = multer({ storage: storage });
? app.post('/register', upload.array('avatarFiles'), function (req, res, next) {
? console.log(req.files)   
? res.send('Archivos subidos correctamente)
? })

! Validacion
Es importante validar los archivos que se suben para permitir almacenarlos

*Manejando errores
Cuando ocurre un error, Multer delega el mismo a Express

var multer = require('multer')
var upload = multer().single('avatarFile')
app.post("/register", (req, res) => {
    upload(req, res, (err) => {
        if(err) {
            res.status(400).send("Algo salió mal!");
    }
    res.send(req.file);
    });
});

*Validar la carga del archivo
Se usa el objeto req.file para saber si se envio o no un archivo

var upload = multer({ storage: storage })
app.post('/register', upload.single('avatarFile'), (req, res, next) => {
    !const file = req.file
    if (!file) {
        const error = new Error('Por favor seleccione un archivo')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)  
})




*/

