const sobre = document.querySelector(".sobre");
const tapa = document.querySelector(".tapa");
const carta = document.querySelector(".carta");

const inicio = document.getElementById("inicio");
const bienvenida = document.getElementById("bienvenida");

sobre.addEventListener("click",()=>{

tapa.style.transform="rotateX(180deg)";

carta.style.transform="translateY(-45px)";

setTimeout(()=>{

inicio.style.display="none";

bienvenida.style.display="flex";

},1200);

});
