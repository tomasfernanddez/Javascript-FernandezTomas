// Pregunta 17
let randomNum = Math.random();
if (randomNum >= 0.5) {
    alert("Greater than 0,5");
} else {
    alert("Lower than 0,5");
}

// Pregunta 18
let Age = 25;

if (Age < 2) {
    alert("Bebe");
} else if (Age >= 2 && Age <= 12) {
    alert("Niño");
} else if (Age >= 13 && Age <= 19) {
    alert("Adolescente");
} else if (Age >= 20 && Age <= 30) {
    alert("Joven");
} else if (Age >= 31 && Age <= 60) {
    alert("Adulto");
} else if (Age >= 61 && Age <= 75) {
    alert("Adulto mayor");
} else if (Age > 75) {
    alert("Anciano");
}