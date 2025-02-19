'use strict'

/*
1. Pida 6 numeros por pantalla y los mete en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola 
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/


function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1> Contenido del array " + textoCustom + "</h1>")
    document.write("<ul>");
    elementos.forEach ((elemento, index) => {
        document.write("<li>" + elemento + "</li> <br/>")
    });
    document.write("</ul>");
}

var numeros = new Array(6);

for (var i = 0; i<=5; i++){

    numeros[i] = parseInt(prompt("Ingresa un numero: "));

}

mostrarArray(numeros, "Desordenado");
console.log(numeros);

numeros.sort(function (a, b){return a-b});
mostrarArray(numeros, "Ordenado de menor a mayor");
console.log(numeros);


numeros.sort(function (a,b) {return b-a});
mostrarArray(numeros, "Ordenado de mayor a menor");
console.log(numeros);

document.write("<p> Numero de elementos: " + numeros.length + "</p>");

var busqueda =  parseInt(prompt("Busca un numero: "));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1){
    document.write("<hr/><p> ENCONTRADO!!... </p>");
    document.write("<p> Posicion de la busqueda: " + posicion +  "</p><hr/>");
}else{
    document.write("<hr/><p> NO SE HA ENCONTRADO!!... </p>");
}

