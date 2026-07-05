const sobre = document.getElementById("abrirSobre");

const intro = document.getElementById("intro");

const hero = document.querySelector(".hero");

sobre.addEventListener("click",()=>{

    document.querySelector(".flap").style.transform="rotateX(180deg)";

    document.querySelector(".letter").style.transform="translateY(-80px)";

    setTimeout(()=>{

        intro.style.display="none";

        hero.style.display="flex";

    },1200);

});
