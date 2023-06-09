// main.js

// Função para exibir uma mensagem de feedback
function exibirMensagem(mensagem, sucesso = true) {
  const mensagemElement = document.createElement('div');
  mensagemElement.classList.add('mensagem');
  mensagemElement.textContent = mensagem;

  if (sucesso) {
    mensagemElement.classList.add('sucesso');
  } else {
    mensagemElement.classList.add('erro');
  }

  document.body.appendChild(mensagemElement);

  // Remover a mensagem após 3 segundos
  setTimeout(() => {
    mensagemElement.remove();
  }, 3000);
}

// Event listener para o envio do formulário de contato
const formContato = document.querySelector('#form-contato');
formContato.addEventListener('submit', function (event) {
  event.preventDefault();

  // Simulando o envio do formulário
  // Você pode adicionar sua lógica de envio de formulário aqui

  // Exibindo mensagem de sucesso
  exibirMensagem('Mensagem enviada com sucesso! Em breve entraremos em contato.', true);

  // Limpar o formulário
  this.reset();
});
