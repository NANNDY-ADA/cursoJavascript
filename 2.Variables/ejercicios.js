//averiguar las diferencias entre let y var (la cocina del codigo)(hosting, scope)(contexto global, local)
//var(ambito scope: ambito global)(re-asignacion un valor)(re-declaradas)
//let(ambito scope: bloque(trozo de código delimitado por {}))(re-asignacion un valor)(no re-declaradas)

//var
var saludar = "hola, ¿qué tal?";
var tiempos = 5;
if (tiempos > 4) {
    var saludar = "hello"; 
}
console.log(saludar)

//let
let saludo = "dice Hola";
if (true) {
    let saludo = "dice Hola ¿qué tal?";
    console.log(saludo);
}
console.log(saludo)

//hoisting
//Hoisting es un mecanismo de JavaScript en el que las variables y declaraciones de funciones se mueven 
//a la parte superior de su ámbito antes de la ejecución del código.
