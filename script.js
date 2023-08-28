const line1Element = document.getElementById('typing-text-line1');
    const line2Element = document.getElementById('typing-text-line2');
    const textLine1 = "Olá, eu sou Carame Júnior,";
    const textLine2 = "Desenvolvedor Front-End";
    let currentIndexLine1 = 0;
    let currentIndexLine2 = 0;

    function typeTextLine1() {
        line1Element.textContent = textLine1.slice(0, currentIndexLine1);
        currentIndexLine1++;

        if (currentIndexLine1 <= textLine1.length) {
            setTimeout(typeTextLine1, 100); // Ajuste o tempo para controlar a velocidade da digitação
        } else {
            setTimeout(typeTextLine2, 500); // Aguarde um tempo antes de começar a próxima linha
        }
    }

    function typeTextLine2() {
        line2Element.textContent = textLine2.slice(0, currentIndexLine2);
        currentIndexLine2++;

        if (currentIndexLine2 <= textLine2.length) {
            setTimeout(typeTextLine2, 100); // Ajuste o tempo para controlar a velocidade da digitação
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        const backToTopButton = document.getElementById("backToTopBtn");
      
        backToTopButton.addEventListener("click", function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        });
      });

    typeTextLine1();