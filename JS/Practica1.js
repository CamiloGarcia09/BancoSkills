'use strict'

/*
Programa que pida dos numeros y diga cual es el mayor, menor y si son iguales.
Si los numeros no son un nuemro o son menores o iguales a 0, nos vuelva a pedir los datos.
*/

var numero1 = parseInt(prompt("Dame el primer numero: ", 0));
var numero2 = parseInt(prompt("Dame el segundo nuemro: ", 0));

// El isNaN nos sirve para saber si el valor que estamos casteando es Not a Number (NaN)
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1, numero2)){
    numero1 = parseInt(prompt("Dame el primer numero otra vez: ", 0));
    numero2 = parseInt(prompt("Dame el segundo numero otra vez ", 0));
}

if (numero1 > numero2){
    alert("El numero " + numero1 + " es mayor que " + numero2);
}else if (numero1 < numero2){
    alert("El numero " + numero1 + " es menor que " + numero2);
}else if (numero1 == numero2) {
    alert("Los numeros son iguales...")
}
