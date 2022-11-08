//FUNCIÓN
//conjunto de instucciones que se agrupan para reliazar una tarea.

//DECLARAR
//palabra reservada function
//nombre de la función
//parámetros (evaluadas entre paréntesis)
//contenido (envelto entre llaves)
//valor retornado, palabra reservada de return

//TIPOS DE FUNCIONES
//función por declaración ---> declarar la función con un nombre y sus 
//                             parámetros de entrada entre paréntesis.
//función por expresión -----> guarda una función en una variable.
//función por constructor de objetos-> las menos recomendadas.

function saludo(nombre, apellido){
    let saludo = "Hola ¿como estas? " + nombre + " " + apellido
    return saludo
}
//para usar la función debo llamar a la función
console.log(saludo("Ada", "Ortiz"))

//arrow function o funciones fecha (expresion de funcion)
//     Sintaxis
//            parametro => expresión (simple no requiere parenctesis)
//            (parametro1, parametro2) => expresion (requiere parentesis)
//            parametro => {   (declaracion de varias lineas requieren 
//            let a = 1;       llaves y return)
//            return a+b; 
//            }
