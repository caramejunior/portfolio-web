  // button voltar ao topo.

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Exibir o botão quando a página for rolada para baixo
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  // Rolar suavemente para o topo quando o botão for clicado
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  

typeTextLine1();
