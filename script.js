const sobre = document.querySelector(".sobre");
const tapa = document.querySelector(".tapa");
const carta = document.querySelector(".carta");

sobre.addEventListener("click",()=>{

tapa.style.transform="rotateX(180deg)";

carta.style.transform="translateY(-45px)";

});
