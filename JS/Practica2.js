'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi 
mostrar el resultado
*/

var contador = 0; 
var suma = 0; 

do{
    var numero = parseInt(prompt("Ingresa un numero: "));

    if (isNaN(numero)){
        numero = 0;
    }else if(numero>=0){
        suma += numero;
        contador ++;
    }

}while (numero>=0);

var promedio = suma / contador;

var texto = ` 
    <h1> Hola, tus resultdos son: </h1>
    <h2> Suma: ${suma} </h2>
    <p> Promedio: ${promedio}</p>

`
document.write(texto);