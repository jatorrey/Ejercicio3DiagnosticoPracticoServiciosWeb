// 3. Palíndromo
// Torres Reyes Jaime Camil
function esPalindromo(palabra) {
    const palabraReversa = palabra.split("").reverse().join("");
    return palabra === palabraReversa;
}

const palabra = "radar";
console.log(`¿Es "${palabra}" un palíndromo?`, esPalindromo(palabra));
