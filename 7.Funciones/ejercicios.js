//hacer un programa que se muestre el factorial de un numero.
function factorial(num){
    if (num < 0)
         return -1;
    else if (num == 0)
        return 1;
    else {
      return (num * factorial(num - 1));
    }
  }
  console.log(factorial(2))
  
  //con bucle while
  function factorialize(cifra) {
    var resultado = cifra;
    if (cifra === 0 || cifra === 1) 
      return 1; 
    while (cifra > 1) { 
      cifra --;
      resultado *= cifra;
    }
    return resultado;
  }
  console.log(factorialize(5))
  
  //con bucle for
  function factorialize(digito) {
    if (digito === 0 || digito === 1)
      return 1;
    for (var i = digito - 1; i >= 1; i--) {
      digito *= i;
    }
    return digito;
  }
  console.log(factorialize(5))
  
  //hacer un programa que me determine si un texto es palindromo
  function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "El texto es palindromo" : "El texto no es palindromo";
  }
  console.log(palindromeChecker("12321"));
  console.log(palindromeChecker("ADA"));
  console.log(palindromeChecker("12344221"));
  
  //hacer un programa que muestre los n primeros numeros de la serie de fibonacci 
  //(1,2,5,8,13,21)
  var serie_fibonacci = function(x) {
    if (x <= 1) return x;
  
    return serie_fibonacci(x-1) + serie_fibonacci(x-2);
  }
  console.log(serie_fibonacci(4))

//EJERCICIOS DE CLASE
//contaor de vocales function contadorvocales(texto){return}
function cont_vocal (texto){
  let contador = 0
  for(let i=0; i < texto.length; i++){
    switch(texto[i] ){
      case "a": case "e": case "i": case "o": case "u":
      contador+=1
    }
  }
  let cont_vocal = texto + " tiene " + contador + " vocales en total"
  return cont_vocal 
}
console.log(cont_vocal("eucalipto"))

//funcion calculadora (num1, num1, operacion){return}
function suma(numero1, numero2) {
  return numero1 + numero2;
}
function resta(numero1, numero2) {
  return numero1 - numero2;
}
function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}
function division(numero1, numero2) {
  return numero1 / numero2;
}
console.log(multiplicacion(2,5))