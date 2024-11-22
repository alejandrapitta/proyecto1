// alert("hola mundo");
// alert(1+9+41);

// alert () muestra una ventana emergente 
// let: variable
let saludo = "holaaa";

let despedida;
despedida = "Adios";

saludo = despedida;

let nombreUsuario = "Alejandra";

let edad = 16;
edad = 17;
edad = edad + 1;
edad += 1; //  puedo sumar a la variable porque guarda un valor numerico 
edad++;  //  suma una 
edad--;  //  resta una 

// console () muestra lo que pongamos dentro de los parentesis dentro de la consola 
console.log(edad);

alert(saludo + " " + nombreUsuario); //  puedo concatenar strings usando +

// const: constantes(para distinguirla la escribo ne mayuscula,ya despues de escrita no se puede editar)
const SALUDO_USUARIO = saludo + nombreUsuario;

// Datos en comillas, sera un dato de texto STRING 
// boolean solo da la opcion e false y true


console.log(5 > 4);// mayor que 
console.log(5 < 8);// menor que 

console.log(5 >= 6);// mayor o igual
console.log(5 <= 7);// menor o igual

console.log(5 == "5");// igual que 
console.log(5 === "5");// extrictamente igual que 
console.log(5 != 7);// no es igual

// Puedo comparar texto
console.log("a" > "b");
console.log("cortazar" > "Navarro");


let premium = true;

if (premium) {
    console.log("tienes cuenta premium");
    alert("Bienvenido" + nombreUsuario)
}

// si no se cumple la condicion if, la opcion else no se va a ejecutar 

else if (edad >= 18) {
    console.log("Puedes crear cuenta");
}
else {
    console.log("no puedes crear cuenta");
}

// Para interactuar con html dom
// SELECTORES
//        recojo el elemento    // que hago//
document.getElementById("texto").innerHTML = "Holaaa " + nombreUsuario;

document.getElementsByClassName("hola").innerHTML = "<p> Hola otra vez </p>";

document.getElementsByClassName("articulo").innerHTML = "gasdagd0";


document.getElementById("texto").innerHTML = "holaaaa" + nombreUsuario;
document.getElementById("caja").innerHTML = "<p>Hasta luego</p>"
//con .innerhtml voy agregarle texo directamrnte desde java a html

// si quiero que me seleccione el primer elemento
//  document.querySelector("#texto").innerHTML = "123456"
//  si quiero que me seleccione todos los elementos 
// document.querySelectorAll.innerHTML =

let texto = document.getElementById("texto");
texto.innerHTML = "He guardado mi selector en una variable";



//FUNCIONES

// function ingresar(){
// alert("Bienvenido Usuario")
// }

function ingresar() {
    let inputUsuario = document.querySelector("#correo-usuario").value
    alert("Hola de nuevo " + inputUsuario);
}
// -----------------------------------



function hola() {

    alert("Bienvenido")
}
hola();

function modoNoche() {
    document.body.style.backgroundColor = "black";

}
function modoDia() {
    document.body.style.background = "white";
}
// --------estrellas cayendo------------------
function createStar() {
    const Star = document.createElement('div');
    Star.classList.add('star');
    Star.style.left = Math.random() * 100 + 'vw';
    Star.style.animationDuration = Math.random() * 6 + 9 + 's';
    document.body.appendChild(Star);
    setTimeout(() => {
        Star.remove();
    }, 5000);
}
setInterval(createStar, 300);

// -------------------------------------------



