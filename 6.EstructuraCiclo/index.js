//averriguar sobre for, while y do while (con)
// condición WHILE---> ejecuta un simple bucle, mientras se cumpla la condición (no se sabe las veces que repite).
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

// condición while do (repite el proceso hasta que se deje de cumplir la condición, 
//           while comprueba la condición antes de ejecutar el código,)
// condición for se repite hasta un numero indicado "n" (sabes hasta cuando se repite)
for (let i=0; i<=10; i++){
    console.log(i)
}