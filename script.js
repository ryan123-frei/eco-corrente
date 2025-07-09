document.addEventListener('DOMContentLoaded', function () {
  // Validação do formulário
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (nome === '') {
        alert('Por favor, preencha seu nome.');
        e.preventDefault();
        return;
      }
      if (email === '') {
        alert('Por favor, preencha seu email.');
        e.preventDefault();
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        e.preventDefault();
        return;
      }
      if (mensagem === '') {
        alert('Por favor, escreva uma mensagem.');
        e.preventDefault();
      }
    });
  }

  // Avaliação geral do site
  const stars = document.querySelectorAll('.site-rating .star');
  const output = document.getElementById('rating-value');

  stars.forEach((star) => {
    star.addEventListener('mouseover', () => {
      resetStars();
      highlightStars(star.dataset.value);
    });

    star.addEventListener('mouseout', () => {
      resetStars();
      highlightStars(getSelectedValue());
    });

    star.addEventListener('click', () => {
      stars.forEach((s) => s.classList.remove('selected'));
      highlightStars(star.dataset.value, true);
      output.textContent = `Você avaliou com ${star.dataset.value} estrela(s)!`;
    });
  });

  function resetStars() {
    stars.forEach((star) => {
      star.classList.remove('hover');
    });
  }

  function highlightStars(value, select = false) {
    stars.forEach((star) => {
      if (star.dataset.value <= value) {
        star.classList.add(select ? 'selected' : 'hover');
      }
    });
  }

  function getSelectedValue() {
    let selected = 0;
    stars.forEach((star) => {
      if (star.classList.contains('selected')) {
        selected = star.dataset.value;
      }
    });
    return selected;
  }
});
