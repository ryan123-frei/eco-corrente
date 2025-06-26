// Espera o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    if (!form) return; // se não tiver form, sai
    
    form.addEventListener('submit', function (e) {
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();
  
      if (nome === '') {
        alert('Por favor, preencha seu nome.');
        e.preventDefault();
        form.nome.focus();
        return;
      }
  
      if (email === '') {
        alert('Por favor, preencha seu email.');
        e.preventDefault();
        form.email.focus();
        return;
      } else {
        // checagem simples de email válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Por favor, insira um email válido.');
          e.preventDefault();
          form.email.focus();
          return;
        }
      }
  
      if (mensagem === '') {
        alert('Por favor, escreva uma mensagem.');
        e.preventDefault();
        form.mensagem.focus();
        return;
      }
  
      // Se passou nas validações, formulário é enviado normalmente
    });
  });
  