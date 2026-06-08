let arrayPalabras = ["manzana", "banana", "naranja", "pera", "uva"];

// Pregunta 19
for (let i = 0; i < arrayPalabras.length; i++) {
    alert("Pregunta 19: " + arrayPalabras[i]);
}

// Pregunta 20
for (let i = 0; i < arrayPalabras.length; i++) {
    let palabraModificada = arrayPalabras[i].substring(0, 1).toUpperCase() + arrayPalabras[i].substring(1).toLowerCase();
    alert("Pregunta 20: " + palabraModificada);
}

// Pregunta 21
let sentence = "";
for (let i = 0; i < arrayPalabras.length; i++) {
    sentence += arrayPalabras[i] + " ";
}
alert("Pregunta 21: " + sentence);

// Pregunta 22
let arrayVacio = [];
for (let i = 0; i < 10; i++) {
    arrayVacio.push(i);
}
console.log("Pregunta 22:", arrayVacio);