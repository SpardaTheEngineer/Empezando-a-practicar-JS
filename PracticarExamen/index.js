// Archivo con ejercicios de JavaScript + soluciones

// 1. Sumar los números de un array
let nums = [1, 2, 3, 4, 5];
let suma = nums.reduce((a, b) => a + b, 0);
console.log("1.", suma);

// 2. Contar palabras en una frase
let frase = "Hola esto es una prueba";
let totalPalabras = frase.split(" ").length;
console.log("2.", totalPalabras);

// 3. Verificar si un número es primo
function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("3.", esPrimo(17));

// 4. Invertir una cadena
let texto = "javascript";
let invertido = texto.split("").reverse().join("");
console.log("4.", invertido);

// 5. Filtrar mayores de edad
let personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Marta", edad: 19 }
];
let mayores = personas.filter(p => p.edad >= 18);
console.log("5.", mayores);

// 6. Encontrar el número máximo
let numeros = [3, 99, 12, 4];
console.log("6.", Math.max(...numeros));

// 7. Crear una clase Usuario
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
let u = new Usuario("Miguel", 20);
console.log("7.", u.saludar());

// 8. Contar cuántas veces aparece un carácter
function contarLetra(texto, letra) {
    return texto.split(letra).length - 1;
}
console.log("8.", contarLetra("banana", "a"));

// 9. Convertir objetos a JSON
let obj = { a: 1, b: 2 };
let json = JSON.stringify(obj);
console.log("9.", json);

// 10. Leer datos JSON
let jsonText = '{"nombre":"Carlos","edad":30}';
let persona = JSON.parse(jsonText);
console.log("10.", persona.edad);

// 11. Temporizador con setInterval
let i = 0;
let timer = setInterval(() => {
    console.log("11.", i++);
    if (i === 5) clearInterval(timer);
}, 1000);

// 12. Sumar valores de un objeto
let precios = { pan: 1, agua: 2, fruta: 3 };
let totalPrecios = Object.values(precios).reduce((a, b) => a + b);
console.log("12.", totalPrecios);

// 13. Número aleatorio entre 1 y 10
let n = Math.floor(Math.random() * 10) + 1;
console.log("13.", n);

// 14. Validar email con regex
let email = "hola@test.com";
let esValido = /\S+@\S+\.\S+/.test(email);
console.log("14.", esValido);

// 15. Evento DOM (requiere HTML)
document.getElementById("btn").addEventListener("click", () => {
document.getElementById("textito").innerText = "Texto cambiado!";
});

// 16. Guardar en localStorage
localStorage.setItem("usuario", "Miguel");
console.log("16.", localStorage.getItem("usuario"));

// 17. Async/Await con fetch
async function obtener() {
    let r = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await r.json();
    console.log("17.", data);
}
obtener();

// 18. Ordenar un array de objetos
let users = [
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 20 }
];
users.sort((a, b) => a.edad - b.edad);
console.log("18.", users);

// 19. Eliminar duplicados
let arr = [1, 2, 2, 3, 3, 3, 4];
let sinDupe = [...new Set(arr)];
console.log("19.", sinDupe);

// 20. Función que recibe otra función
function ejecutar(fn) {
    fn();
}
ejecutar(() => console.log("20.", "Ejecutado"));