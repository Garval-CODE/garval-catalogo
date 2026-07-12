fetch("productos.json")

.then(res => res.json())

.then(productos => {


const contenedor = document.getElementById("productos");

const buscador = document.getElementById("buscar");



function mostrarProductos(lista){


contenedor.innerHTML = "";


lista.forEach(producto => {


const tarjeta = document.createElement("div");

tarjeta.className = "card";



tarjeta.innerHTML = `


<img 
src="${producto.imagen}" 
alt="${producto.nombre}"
class="imagen-producto">
<h3>${producto.nombre}</h3>


<p>${producto.descripcion}</p>


<strong>$${producto.precio} MXN</strong>


<a 

class="btn"

target="_blank"

href="https://wa.me/529936952479?text=${encodeURIComponent(

"Hola GARVAL. Vi el producto " 

+ producto.nombre 

+ " en su catálogo y me gustaría recibir más información."

)}">

💬 Solicitar información

</a>


`;


contenedor.appendChild(tarjeta);
    
tarjeta.querySelector(".imagen-producto").addEventListener("click",()=>{

    visor.style.display="flex";

    imagenGrande.src = producto.imagen;

});


});


}



mostrarProductos(productos);





buscador.addEventListener("input",()=>{


const texto = buscador.value.toLowerCase();



const filtrados = productos.filter(producto =>


producto.nombre.toLowerCase().includes(texto)

||

producto.categoria.toLowerCase().includes(texto)



);



mostrarProductos(filtrados);



});



});

/*==========================
VISOR DE IMAGEN
==========================*/

const visor = document.getElementById("visor");

console.log("VISOR:", visor);

const imagenGrande = document.getElementById("imagen-grande");

const cerrar = document.querySelector(".cerrar");



document.querySelectorAll(".imagen-producto").forEach(imagen => {


    imagen.addEventListener("click",()=>{


        visor.style.display="flex";

        imagenGrande.src = imagen.src;


    });


});



cerrar.addEventListener("click",()=>{

    visor.style.display="none";

});



visor.addEventListener("click",(e)=>{


    if(e.target === visor){

        visor.style.display="none";

    }


});
