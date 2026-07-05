const sobre = document.getElementById("abrirSobre");
const intro = document.getElementById("intro");
const hero = document.querySelector(".hero");

sobre.addEventListener("click", () => {

    document.querySelector(".flap").style.transform = "rotateX(180deg)";
    document.querySelector(".letter").style.transform = "translateY(-80px)";

    setTimeout(() => {

        intro.style.display = "none";
        hero.style.display = "flex";

    }, 1200);

});

// ❤️ Corazones flotando

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.classList.add("heart");

    corazon.innerHTML = "❤";

    corazon.style.left = Math.random()*100+"vw";

    corazon.style.animationDuration = (5 + Math.random()*5)+"s";

    corazon.style.fontSize = (15 + Math.random()*20)+"px";

    document.body.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },10000);

}

setInterval(crearCorazon,700);
