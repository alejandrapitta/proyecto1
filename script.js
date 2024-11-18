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
edad = edad+1; 
edad += 1; //  puedo sumar a la variable porque guarda un valor numerico 
edad++;  //  suma una 
edad--;  //  resta una 

// console () muestra lo que pongamos dentro de los parentesis dentro de la consola 
console.log(edad);

alert(saludo+" "+nombreUsuario); //  puedo concatenar strings usando +

// const: constantes(para distinguirla la escribo ne mayuscula,ya despues de escrita no se puede editar)
const SALUDO_USUARIO = saludo+nombreUsuario;

// Datos en comillas, sera un dato de texto STRING 
// boolean solo da la opcion e false y true


console.log(5 > 4);// mayor que 
console.log(5 < 8);// menor que 

console.log(5 >= 6);// mayor o igual
console.log(5 <= 7);// menor o igual

console.log(5 == 5);// igual que 
console.log(5 != 7);// no es igual

console.log("a">"b");

let premium = true;

if (premium) {
    console.log("tienes cuenta premium");
}

else if (edad>=18){
    alert("Puedes crear cuenta");
} else {
    alert("no puedes crear cuenta");
}


// interactuar con html dom
//        recojo el elemento// que hago//
document.getElementById("texto").innerHTML = "Holaaa "+nombreUsuario;

document.getElementsByClassName("hola").innerHTML = "<p> Hola otra vez </p>";

document.getElementsByClassName("articulo").innerHTML = "gasdagd0";

