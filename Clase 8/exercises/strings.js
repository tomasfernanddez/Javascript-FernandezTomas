// Pregunta 4
let texto4 = "desarrolloweb";
let textoMayuscula = texto4.toUpperCase();
console.log("Pregunta 4:", textoMayuscula);

// Pregunta 5
let texto5 = "desarrolloweb";
let primerosCinco = texto5.substring(0, 5);
console.log("Pregunta 5:", primerosCinco);

// Pregunta 6
let texto6 = "desarrolloweb";
let ultimosTres = texto6.substring(texto6.length - 3);
console.log("Pregunta 6:", ultimosTres);

// Pregunta 7
let texto7 = "desarrolloweb";
let formatoTitulo = texto7.substring(0, 1).toUpperCase() + texto7.substring(1).toLowerCase();
console.log("Pregunta 7:", formatoTitulo);

// Pregunta 8
let texto8 = "desarrollo web";
let primerEspacio = texto8.indexOf(" ");
console.log("Pregunta 8:", primerEspacio);

// Pregunta 9
let texto9 = "programacion asincrona";
let espacioIndex = texto9.indexOf(" ");
let primerPalabra = texto9.substring(0, espacioIndex);
let segundaPalabra = texto9.substring(espacioIndex + 1);

let resultadoFinal = 
    primerPalabra.substring(0, 1).toUpperCase() + primerPalabra.substring(1).toLowerCase() + 
    " " + 
    segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();
console.log("Pregunta 9:", resultadoFinal);