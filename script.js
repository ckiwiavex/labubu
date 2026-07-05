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
const carta = `

maldita

Hoy es tu cumpleaños.

Y pensé que un regalo podía ser muchas cosas.

Podía ser algo que se compra.

O algo que se envuelve.

Pero preferí hacer algo diferente.

Quería crear un pequeño lugar que existiera solamente para ti.

Un rincón de internet donde pudieras sonreír.

Espero que este pequeño detalle te recuerde lo especial que eres.

❤️
`;

const texto = document.getElementById("textoCarta");

let i = 0;

function escribirCarta(){

    if(i < carta.length){

        texto.innerHTML += carta.charAt(i);

        i++;

        setTimeout(escribirCarta,35);

    }

}
