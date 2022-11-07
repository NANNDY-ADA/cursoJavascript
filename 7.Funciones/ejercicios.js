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