//ronysosaya@gmail.com

//operadores ----> manipulan el valor de las vaiables permitiendo realizar cálculos 
//                 complejos y la toma de decisiones lógicas 
//TIPOS DE OPERADORES

//ASIGNACIÓN
//NANNDY-----> Guarda un valor especifico (símbolo de =)
//RONY ------> El operador de asignacion, destina el valor de su operando derecho a su
//            operando izquierdo, es decir x=y y asigna el valor de y a x.
let numero = 13 
var animal = "gato"
var objeto = "Libro"

//CONCLUSIÓN ---> El operador de asignación nos sirve para designar valores especificos a
//                la variable que consignemos.

//COMPARACIÓN
//NANNDY ----> Comprueba si sus dos operadores son iguales y devuelve un resultado booleano (simbolo ==)
//RONY ------> El operador de comparación sirve para comparar operandos y devolver un valor lógico
//             en función a la comparación.
var num_1 = 3
3 == num_1
console.log(num_1) //true

//CONCLUSIÓN ----> El operador de comparación comprueba la similitud de dos valores.

//ARITMÉTICOS
//NANNDY ----> Manipulaciones matemáticas sobre le valor de las variables numéricas (+, -, x, /)
//RONY ------> Los operadores aritmericos toman valores literales o variables como operandos, devolviendo
//             un solo valor numérico.
let num_0 = 17
let num_00 = 19
console.log("La multiplicación es " + num_0 * num_00)

//CONCLUSIÓN ---> Los operadores aritméticos sirven para calcular el valor de dos o más números.

//BIT A BIT
//NANNDY ----> Opera sobre númericos binarios (0,1)
//RONY ------> Los operadores de bit a bit realizan sus operaciones en representaciones binarias (ceros y unos), 
//             nos remiten valores numéricos estándares.
var a = 4; //100
var b = 1; //1
console.log("A & B = " + (a & b)); 
console.log("A | B = " + (a | b)) //0101

//CONCLUSIÓN ---> Trabajan en números binarios pero nos muetran valores numéricos estándares

//LÓGICOS 
//NANNDY ---> Los operadores lógicos comparan valores boolenos y devuleven valores booleanos (true, false)
//RONY -----> los operadores lógicos se denominan también como operadores booleanos
var a1 =  true && true
console.log(a1)

//CONCLUSIÓN ---> Opera con valores booleanos.

//CADENA
//NANNDY ---> Concatena cadenas, union (+)
//RONY -----> Se utiliza en fórmulas para unir dos o más cadenas 
let nombre = "Rony"
let edad = 19
console.log(nombre + " tiene " + edad + " años")

// CONCLUSIÓN ---> Sirve para unir cadenas (+)

//CONDICIONAL
//NANNDY ---> ejecutar acciones a base de consiciones (if, else)
//RONY -----> La función de los operadores condicionales sirve para indicarnos si se cumple o no
//            una condición
var años = 19
  if (años >= 18){
    console.log("Ya eres un adulto")
  } else {
    console.log("Aun eres un niño")
  }

//CONCLUSIÓN ---> Trabajo con base a condiciones

//COMA
//NANNDY ---> Evalúa cada uno de sus operandos y retorna el valor del último operando.
//RONY -----> Evalúa disitintos operandos, devolviendo el valor del último operando.
var a, b, c;
a = b = 3; c = 4;
console.log(c);

//CONCLUSIÓN ---> Evalúa y devuelve el valor del último operador

//UNARIOS
//NANNDY ---> un solo operador
//RONY -----> Es la operación con el uso de un solo operando.
var semestre = 6
console.log(semestre)

//CONCLUSIÓN ---> Uso de un solo operador.

//RELACIONES
//NANNDY ---> Comparan valores booleanos y devuelven respuestas booleanas.
//RONY -----> El operador relacional compara los diferentes operandos, devolviendo un valor booleano
//            basado en si la comparación es verdadera. 
let comidas = ["Tipacay", "pollo a la plancha", "pachamanca", "lomo saltado"];
console.log(0 in comidas);
console.log(3 in comidas);
console.log(5 in comidas)

//CONCLUSIÓN ---> Compara los datos y devuelve valores booleanos