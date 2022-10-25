//ASIGNACIÓN
let numero = 13 
var animal = "gato"
var objeto = "Libro"

//COMPRACIÓN
var num_1 = 3
3 == num_1
console.log(num_1) //true

//ARITMETICA
let num_0 = 17
let num_00 = 19
console.log("La multiplicación es " + num_0 * num_00)

//BIT A BIT
var a = 4; //100
var b = 1; //1
console.log("A & B = " + (a & b)); 
console.log("A | B = " + (a | b)) //0101

//LÓGICOS
var a1 =  true && true
console.log(a1)

//CADENA
let nombre = "Rony"
let edad = 19
console.log(nombre + " tiene " + edad + " años")

//CONDICIONAL
var años = 19
  if (años >= 18){
    console.log("Ya eres un adulto")
  } else {
    console.log("Aun eres un niño")
  }

//COMA
var a, b, c;
a = b = 3; c = 4;
console.log(c);

//UNARIO
var semestre = 6
console.log(semestre)

//RELACIÓN
let comidas = ["Tipacay", "pollo a la plancha", "pachamanca", "lomo saltado"];
console.log(0 in comidas);
console.log(3 in comidas);
console.log(5 in comidas)