//Es una estructura que permite ejecutar varios algoritmos el cual toma diferentes caminos 
//estos caminos tiene diferentes resultados dependiendo a la condición que nosotros estemos 
// considerando. (incio, evaluación de la condición, resultados)

//condición IF---> para especificar un bloque de código que se ejecutará, si una condición especifica es verdadera.
//  Sintaxis
//          if (condition) {
//          la condicion es verdadera
//          }
let horas = 17
if (horas < 18) {
    console.log("Buenos días")
  }

//condición ELSE---> para especificar un bloque de código a ejecutar, si la misma condición es falsa.
//   Sintaxis
//           if (condition) {
//           la condicion es verdadera
//           } else {
//           la condicion es falsa
//           }
let hora = 19
if (hora < 18) {
    console.log("Que tengas buen día");
  } else {
    console.log("que disfrutes de la linda noches");
  }

//condición ELSE IF---> para especificar una nueva condición para probar, si la primera condición es falsa.
//   Sintaxis
//           if (condition1) {
//           la condicion es verdadera
//           } else if (condition2) {
//           la condicion1 es false y la condicion2 es verdadera
//           } else {
//           la condicion1 es falso y la condicion2 es falso
//           }
let tiempo = 19
if (tiempo < 12) {
    console.log("Buenos días");
} else if (tiempo < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenos noches");
}

//condición SWITCH---> para especificar muchos bloques alternativos de código para ejecutar.
//    Sintaxis
//            switch (expresión){
//              case 0: declaración disruptiva; break;
//              case 1: declaración disruptiva; break;
//              case 2: declaración disruptiva; break;
//              case n: declaración disruptiva; break;
//}   
let dia = 3
switch(dia) {
    case 1: console.log("Este es el número 1."); break;
    case 2: console.log("Este es el número 2."); break;
    case 3: console.log("Este es el número 3."); break;
    case 4: console.log("Este es el número 4."); break;
    case 5: console.log("Este es el número 5."); break;
    case 6: console.log("Este es el número 6."); break;
    case 0: console.log("Este es el número 0."); break;
  }

// condición WHILE--->  ejecuta un simple bucle, mientras se cumpla la condición.
//     Sintaxis
//             while (condición){
//             llama "cuerpo del bucle"
//}
let i = 0;
while (i < 16) { // muestra 0, luego 1, luego 2 hasta el 15
  console.log( i );
  i++;
}

//¡¡¡investiga!!!
// while do (repite el proceso hasta que se deje de cumplir la condición, while comprueba la condición antes de ejecutar el código,)
// for ¿?
//math.ceil ---> redondea hacia arriba 2.01 = 3
//math.floor --> redondea hacia abajo 2.01 = 2
//math.round --> dependendo de la parte decimal 2.02 = 2 o 100,51 = 101.
