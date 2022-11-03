//FOR 
for (let i=1; i<=20; i++) { 
  if (i%2 ==0){
   	console.log(i)
  } else {
    console.log(i)
  }
}

for (let i=2; i<10; i+=2){
  console.log(i)
  }

for (let i=2; i< 20; i++){
  console.log(i++)
}

let vocales = "aeiou"
for(let i=0; i<vocales.length; i++){
  console.log(vocales[i])
}

let saludo = "hola como estas como te llamas"
let contador = 0
for(let i=0; i < saludo.length; i++){
  if (saludo[i] == "a"){
    contador+= 1
  }
}
console.log("tienes", contador,  "vocales a")

//
let palabra = "eucalipto"
let conta = 0
for(let i=0; i < palabra.length; i++){
    if (palabra[i] == "a"){
      conta+= 1
    }
    if (palabra[i] == "e"){
      conta+= 1
    }
    if (palabra[i] == "i"){
      conta+= 1
    }
    if (palabra[i] == "o"){
      conta+= 1
    }
    if (palabra[i] == "u"){
      conta+= 1
    }
}
console.log("tienes", conta ,  "vocales")

//intentando hacerlo con switch
let texto = "Hoy es jueves, si sobrepiensas las cosas, escribe."
contadorcito = 0
for(let i=0; i < texto.length; i++){
  switch(texto[i] ){
    case "a": case "e": case "i": case "o": case "u":
    contadorcito+=1
  }
}
console.log("tienes", contadorcito ,  "vocales")

//WHILE
var a=0;	 	 
while (a <= 5) {	 	 
    console.log("Valor de a = " + a); 
    a++;	 	 
}

//DO-WHILE
var i=0;	 	 
do {	 	 
    console.log("Valor de i = " + i);
    i++;	 	 
} while (i <= 5);	 	

//hacer un programa que se muestre el factorial de un numero
//hacer un programa que me determine si un texto es palindromo
//hacer un programa que muestre los n primeros numeros de la serie de fibonacci 
//(1,2,5,8,13)