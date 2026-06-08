// Pregunta 23 (6a)
function suma(a, b) {
    return a + b;
}
let resultadoSuma = suma(5, 10);
console.log("Pregunta 23:", resultadoSuma);

// Pregunta 24 (6b)
function sumaValidada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        alert("Uno de los parámetros tiene error (no es un número).");
        return NaN;
    }
    return a + b;
}
console.log("Pregunta 24:", sumaValidada(5, "hola")); 

// Pregunta 25 (6c)
function validateInteger(numero) {
    return Number.isInteger(numero);
}
console.log("Pregunta 25:", validateInteger(5.5)); 

// Pregunta 26 (6d)
function sumaEnterosValidada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        alert("Uno de los parámetros tiene error.");
        return NaN;
    }
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Error: Los números contienen decimales. Serán redondeados.");
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}
console.log("Pregunta 26:", sumaEnterosValidada(5.3, 10.8));

// Pregunta 27 (6e)
function revisarYRedondear(num) {
    if (!validateInteger(num)) {
        alert("El número " + num + " no es entero, se redondeará.");
        return Math.round(num);
    }
    return num;
}

function sumaFinal(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        alert("Uno de los parámetros tiene error.");
        return NaN;
    }
    a = revisarYRedondear(a);
    b = revisarYRedondear(b);
    return a + b;
}
console.log("Pregunta 27:", sumaFinal(3.14, 5));