//averriguar sobre for, while y do while

// condición WHILE---> ejecuta un simple bucle, mientras se cumpla la condición (no se sabe las veces que repite).
//*Cuando llega a un bucle while, primero se evalúa la condición, y si es verdadera, se ejecuta las instrucciones 
//(cuerpo del bucle), y luego se vuelve a verificar dicha condición. Este proceso se repite hasta que la condición 
//sea falsa y no se ejecutará el bucle, y después continuará con la ejecución del resto de código.*
//     Sintaxis
//             while (condición){
//             llama "cuerpo del bucle"
//             }
let eval = true
let eval2 = ""
while (eval == true){
    if (eval2== "salir"){
        console.log("adios")
        eval = false
    }
    console.log("Hola")
}

// condición while do---> repite el proceso hasta que se deje de cumplir la condición, 
//                        while comprueba la condición antes de ejecutar el código
//*El ciclo Do while es una estructura de control cíclica, que permite ejecutar una o varias lineas de código de forma repetitiva.
//Dicho ciclo es una variación del ciclo while, ya que estos se diferencian en su funcionamiento. De este modo los ciclos do while 
//son mas efectivos para resolver algunas situaciones especificas. Una característica principal de este ciclo, es que se ejecuta al
// menos una vez.*
//     Sintaxis
//             do
//               expresión
//             while (condición);
let result = '';
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log(result);

// condición for---> se repite hasta un numero indicado "n" (sabes hasta cuando se repite)
//                   se repite hasta una condición especifica donde se evalue como false.
//*Los ciclos for son estructuras de control cíclicas, que permite ejecutar una o varias lineas de código en forma iterativa. Para que este
//proceso se dé a cabo, previamente se tiene que asignar un valor de inicio, un valor final y el tamaño de paso.*
//     Sintaxis
//             for (inicia; condicional; incremento) { 
//             sentencia
//}
for (let i=2; i<10; i+=2){
console.log(i)
}


//La principal diferencia entre FOR y WHILE, es que el primero se usa cuando se conoce las veces que va a repetir y en el segundo control 
//cíclico no se conoce el número de repeticiones.

//Bucle while Estos bucles se utilizan cuando queremos repetir la ejecución de unas sentencias un número 
//indefinido de veces, siempre que se cumpla una condición. Se más sencillo de comprender que
//el bucle FOR, pues no incorpora en la misma línea la inicialización de las variables su condición 
//para seguir ejecutándose y su actualización. Sólo se indica, como veremos a continuación, la 
//condición que se tiene que cumplir para que se realice una iteración.
