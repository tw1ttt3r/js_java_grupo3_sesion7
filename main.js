// getElementById
// getElementsByClassName
// getElementsByTagName

// ejemplos
// Obtener los nodos que tengan el id imagen
const imagen1 = document.getElementById("imagen")
// Obtener los nodos que tengan la clase datos
const datos1 = document.getElementsByClassName("datos")
// Obtener los nodos que tengan la clase photo
const photo1 = document.getElementsByClassName("photo")
// Obtener los nodos con etiqueta div
const divs1 = document.getElementsByTagName("div")

// querySelector
// querySelectorAll

// ejemplos
// Obtener los nodos que tengan el id imagen
const imagen2 = document.querySelector("#imagen")
// elemento de tipo nodo
// Obtener los nodos que tengan la clase datos
const datos2 = document.querySelectorAll(".datos")
// nodeList
// Obtener los nodos que tengan la clase photo
const photo2 = document.querySelectorAll(".photo")
// Obtener los nodos con etiqueta div
const divs2 = document.querySelectorAll("div")
// nodeList

// nodeList es un tipo de arreglo que especifica que contiene nodos


const nuevaImagen = "https://humanidades.com/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg";


// document.querySelector("#imagen").src = "assets/imgs/imagen_perro.jpeg";

const nodeImagen = document.querySelector("#imagen");

nodeImagen.src = "assets/imgs/imagen_perro.jpeg";
// nodeImagen.src = nuevaImagen;

