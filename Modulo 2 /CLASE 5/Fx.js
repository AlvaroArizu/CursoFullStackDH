let dia = 'jueves'

function finDeSemana (dia) {	
	switch (dia){
		case 'viernes':
		 console.log('buen finde');
		  break;
		case 'lunes':
		 console.log('buena semana');
		  break;
		default:
		 console.log('buen dia');
		  break;
	}
}

function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}

let dia1 = 'domingo'
function sePoneLaOlla (dia1) {
    if (dia1 == 'domingo'){
        return true, "Pongamos la olla, hoy se comen pastas!";
    } else 
        return false, "Mejor lo dejamos para el domingo";
}
console.log(sePoneLaOlla(dia1));

let dia2 = 'jueves';
function tengoClases(dia2) {
	switch (dia2) {
    	case 'lunes':
		 console.log('tenes clases');
		  break;
		case 'miercoles':
		 console.log('tenes clases');
		  break;
		case 'viernes':
		 console.log('tenes clases');
		  break; 
		default:
		 console.log('no tenes clases');
		  break;
	}
}
console.log(tengoClases(dia2));