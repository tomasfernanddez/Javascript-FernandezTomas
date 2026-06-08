let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Pregunta 10
console.log("Pregunta 10: Mes 5 y 11:", meses[4], meses[10]); 

// Pregunta 11
let mesesOrdenados = [...meses].sort();
console.log("Pregunta 11:", mesesOrdenados);

// Pregunta 12
let mesesModificados = [...meses];
mesesModificados.unshift("MesInicio");
mesesModificados.push("MesFin");
console.log("Pregunta 12:", mesesModificados);

// Pregunta 13
mesesModificados.shift();
mesesModificados.pop();
console.log("Pregunta 13:", mesesModificados);

// Pregunta 14
let mesesInvertidos = [...meses].reverse();
console.log("Pregunta 14:", mesesInvertidos);

// Pregunta 15
let mesesUnidos = meses.join("-");
console.log("Pregunta 15:", mesesUnidos);

// Pregunta 16
let porcionMeses = meses.slice(4, 11); 
console.log("Pregunta 16:", porcionMeses);