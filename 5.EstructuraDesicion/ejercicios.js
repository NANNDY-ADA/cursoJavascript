//IF
let edad = 19
if (edad > 18) 
   console.log("Puedes ver esta página para adultos")

//ELSE
var años = 19
if (años >= 18){
  console.log("Ya eres un adulto")
} else {
  console.log("Aun eres un niño")
}

//ELSE IF
let nota = 12
if (nota < 10) {
    console.log("Ud. a reprobado, sin opción a recuperar");
} else if (nota < 13) {
    console.log("Ud. a reprobado, con opción a recuperar");
} else {
    console.log("Ud. no reprobo");
}

//SWITCH
let dia = 2
switch(dia) {
    case 1: console.log("Hoy es lunes, para mejorar tu concentración, medita."); break;
    case 2: console.log("Hoy es martes, si sobrepiensas las cosas, escribe."); break;
    case 3: console.log("Hoy es miercoles, para aumentar tu autoestima, ejercitate."); break;
    case 4: console.log("hoy es jueves, si te estresas solo respira."); break;
    case 5: console.log("Hoy es viernes, para generar ideas solo camina."); break;
    case 6: console.log("Hoy es sábado, rejalate mi reina."); break;
    case 0: console.log("Hoy es domingo, para incrementar tu energia, duerme."); break;
}

//WHILE
let i = 1;

while (i <= 5) {
	console.log("El valor del bucle es: " + i);
	i++;
}