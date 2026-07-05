const boton = document.getElementById("abrir");

const carta = document.getElementById("carta");

boton.addEventListener("click",()=>{

    carta.style.display="flex";

    carta.scrollIntoView({

        behavior:"smooth"

    });

});
#galeria{

padding:100px 8%;

}

#galeria h2{

text-align:center;

margin-bottom:50px;

font-size:45px;

color:#ff70ad;

}

.fotos{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(230px,1fr));

gap:35px;

}

.foto{

background:white;

padding:15px;

border-radius:18px;

box-shadow:0 15px 30px rgba(0,0,0,.1);

transition:.4s;

transform:rotate(-2deg);

}

.foto:nth-child(even){

transform:rotate(2deg);

}

.foto:hover{

transform:scale(1.05) rotate(0deg);

}

.foto img{

width:100%;

border-radius:12px;

display:block;

}

.foto p{

margin-top:15px;

text-align:center;

font-size:17px;

}
