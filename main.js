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

// nodeImagen.src = "assets/imgs/imagen_perro.jpeg";
// nodeImagen.src = nuevaImagen;

const imagenes = [
  {
    src: "https://images.ecestaticos.com/6sBfqVAafBgDnRSzgexcXrntPxs=/0x0:1254x836/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fad9%2F5c2%2F36b%2Fad95c236b7d6ce4df06290141f7fa00a.jpg",
    alt: "enojado"
  },
  {
    src: "https://cdn.forbes.com.mx/2023/07/Dia-del-perro-640x360.jpg",
    alt: "enamorado"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssItb8NA4ZmDOMvhjYDH1X4xlevy_Y3C-8E7DmaAbBNheU_4n4FzpOOnKl9pVO4g7U5k&usqp=CAU",
    alt: "aburrido"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMFuOBEdKninQPu308UUz_OmANfHwT8NsRg&usqp=CAU",
    alt: "corriendo"
  },
  {
    src: "https://images.hola.com/imagenes/mascotas/20201130180110/signos-perro-se-hace-mayor/0-894-886/perro-anciano-t.jpg",
    alt: "tranquilo"
  },
  {
    src: "https://img.freepik.com/foto-gratis/perro-pug-aislado-fondo-blanco_2829-11416.jpg?w=2000",
    alt: "feliz"
  },
  {
    src: "https://fotografias.antena3.com/clipping/cmsimages01/2022/09/27/CA11B1FD-DC89-4D50-ADE1-06B35E28881F/imagen-chihuahua_98.jpg?crop=4608,2593,x0,y265&width=1900&height=1069&optimize=low&format=webply",
    alt: "descansando"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbt6f4KeDwJGES_twE3-mUch8clgm-K-G2ig&usqp=CAU",
    alt: "pensativo"
  },
  {
    src: "https://imagenes.heraldo.es/files/image_990_v3/uploads/imagenes/2017/04/26/_dog7346891280_09e9577b.jpg",
    alt: "intelectual"
  },
  {
    src: "https://fotografias.larazon.es/clipping/cmsimages01/2023/07/05/0070E82D-D459-48D2-B7A5-1DB25F422F4A/perro-refrescandose-calor_98.jpg?crop=640,360,x0,y32&width=1900&height=1069&optimize=low&format=webply",
    alt: "mojado"
  },
  {
    src: "https://hips.hearstapps.com/hmg-prod/images/perros-vivir-mas-anos-1669733501.jpg",
    alt: "vacaciones"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqr5jtjQTVtuBQM5mDLvn-p2r6A45zj_g4Sg&usqp=CAU",
    alt: "ganando"
  },
];

// fijar las imagenes a cada uno de los nodos
configured(imagenes)


document.querySelector("button").addEventListener("click", () => {
  manipulacion();
});

function ordenamiento() {
  return imagenes.sort(() => Math.random() - .5)
}

function manipulacion() {
  const ids = ordenamiento()
  configured(ids)
}


function configured(source) {
  const divs = document.querySelectorAll(".image");
  divs.forEach((nodo, position) => {
    nodo.children[0].src = source[position].src;
    nodo.children[0].alt = source[position].alt;
    nodo.children[0].style.width = "150px";
    nodo.children[0].style.heigth = "100%";
    nodo.children[0].addEventListener("click", () => {
      nodo.replaceChild(source[position].texto,  source[position].img);
    });
    source[position].img = nodo.children[0]
    const texto = document.createElement('p');
    texto.textContent = 'Dar click para ver la imagen';
    texto.classList.add("parrafo_replacement");
    texto.addEventListener('click', () => {
      nodo.replaceChild( source[position].img, source[position].texto);
    });
    source[position].texto = texto
  });
}