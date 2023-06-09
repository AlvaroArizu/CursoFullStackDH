
function reemplazoFastFast (parametro1 = 'y', parametro2 = 'malo', parametro3 = '?'){
    return 'hola,' + ' ' + parametro1 + ' ' + parametro2 + parametro3;
}



console.log(reemplazoFastFast().replace('y', "como").replace('malo', 'estas'));



function menciona(texto, palabra){
    let resultado = texto.indexOf(palabra)
    resultado = texto.indexOf(palabra) > -1 ? true : false
    return resultado
    
}
console.log(menciona("Hola mundo", "Hola"));
