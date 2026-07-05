
// Intenta reproducir la música al cargar la página
window.addEventListener("load", () => {
  const audio = document.querySelector("audio");

  if (audio) {
    const playPromise = audio.play();

    // Algunos navegadores bloquean autoplay, esto lo “arregla”
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("El navegador bloqueó el audio. Toca la página para activarlo.");
      });
    }
  }

  // Efecto de aparición suave para la carta
  const carta = document.querySelector(".carta");
  if (carta) {
    carta.style.opacity = 0;
    carta.style.transform = "translateY(20px)";

    setTimeout(() => {
      carta.style.transition = "all 1.2s ease";
      carta.style.opacity = 1;
      carta.style.transform = "translateY(0)";
    }, 200);
  }
});
