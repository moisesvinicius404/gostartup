
    lucide.createIcons();

    // Efeito de digitação
    const text = "Impulsione suas ideias com a GoStartup";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
      }
    }
    window.onload = typeWriter;

    // Fade dos cards ao aparecer na tela
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
