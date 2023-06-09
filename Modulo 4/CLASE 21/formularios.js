/*
TEMAS:
-Formularios
-Radio buttons y checkboxes
-Formularios avanzados
-Pseudo selectores en CSS


Los formularios son componentes muy pero muy importantes al momento de pensar en el desarrollo de un sitio web. Estos nos van a permitir disponer de una entrada de datos por parte del cliente para que posteriormente podamos administrar esa información suministrada. 

Etiquetas de HTML para hacer formularios

<form action="RUTA DONDE VA LA INFO CAPTURADA" method="DEFINE COO SE ENVIA LA INFO">
    aqui van los campos
</form>  

<label>
    Nombre comprepleto:
</label>

<input type="text"> genera un campo de tipo basico de una sola linea
<input type="password"> genera solo un campo que lo que se escriba adentro se vera aso ***********
<input type="email"> solo formatos de tipo correo electronico
<input type="tel"> cuando esta desde un despositivo movil

<textarea></textarea> para generar campos de varias lineas en formato de comentarios

<select></select> genera un campo con varias opciones para que eleiga el usuario

<option></option> genera una opcioon dentro de la caja de opciones 

<select>
    <option></option>
    <option></option>
    <option></option>
    <option></option>
</select>

<button 
type="reser">BORRAR</buttom>
<buttom
type="submit">ENVIAR</buttom>

atributos 
    name, 
    value(no permite texto por parte del ussuarios),
    required( genera que sea obligatorio)
    placeholder (texto de ayuda)


RADIO BUTTON Y CHECHBOXES

*Radio buttom(campos de opcion)
<label>
        <input type="radio" name="tipoSubscripcion" checked>TERMINOS
</label>

*Checkboxes(casilla de verificacion)
<label>
        <input type="checkboxes" name="pasatiempo" value="opcion que se envia" checked>TERMINOS
</label>

FORMULARIOS AVANZADOS


<input type="date" name="fechaNacimiento" value="1985-08-28">

<input type="file" name="imagenDePerfil" multiple accept=".jpg, .png">
<span class="feedback"></span>

PSEUDO SELECTORES

Son selectore que se aplican sobre un selector existente y se utilizan para modoficar el compartaiento o el contenido de un elemento de html

2 grupos: clases y elementos
*Clases: se aplican sobre un selector especifico

.selector:pseudo-clase{
    declaracion de css
}

    -visited: se utiliza para aplicar estilos a los enlaces que hayan sido visitados al menos una vez, esclusiva de enlaces
        a {
            color: green;
        }
        a: visited{
            color: gray;
        }
    
    -hover: se activa cunado se pase el mouse sobre un elemento espeficifo, puede ser aplicada a cualquier elemento
        a: hover{
            color: orange;
            text-decoration: underline;
        }

        .warning-text:hover{
            color: red;
            background-color: yel;
        }

    -focus:se aplica cuando un elemento html tiene el foco del cursor, se aplica en los formularios (input y texaere)
        input:focus{
            color: green;
            font-weigth: bold;
        }

*Elementos: se encargan de manipular el contenido de un elemento html, se podria agregar cotenido al html desde css con ellos


    -before
        h2::before{
            content:'Voy antes!';
        }
    
    -after
        h2::after{
            content:'Voy antes!';
        }









*/