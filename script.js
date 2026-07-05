const boton = document.getElementById("abrir");

const carta = document.getElementById("carta");

boton.addEventListener("click",()=>{

    carta.style.display="flex";

    carta.scrollIntoView({

        behavior:"smooth"

    });

});
