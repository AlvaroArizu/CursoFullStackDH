//Perfil
let perfil = "Administrador".toLowerCase();

//Si es un pefil en blanco => debe especificar el perfil del usuario
//Si es un perfil administrador => usted tiene todos los permisos del sistemna
//Si es un perfil asistente => usted solo tiene permisos de registar, modificar y consultar datos
// Si es un perfil invitado => Usted solo tiene perrmiso de consultar datos
//Si no es ninguno de los anteriores => Perfil invalido

//ToLowerCase es un metodo, algo nativo de JS, DEVEULVE EL VALOR EN MINISCULA, cadena.toLowerCase()
//

switch (perfil) {
    case "":
        console.log("debe especificar el perfil del usuario");
        break;
    case "ADMINISTRADOR":
    case "Administrador":
    case "administrador":
        console.log("usted tiene todo los permisos del sistema");    
        break;
    case "asistente":
    case "Asistente":
    case "ASISTENTE":    
        console.log("usted solo tiene permisos de registar, modificar y consultar datos");
         break;
    case "invitado":
        console.log("Usted solo tiene permisos de consultar datos")
        break;
    default:
        console.log("perfil invalido");
        break;
}