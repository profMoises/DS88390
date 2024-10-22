// Seleciona o formulário e adiciona um evento para quando o botão de enviar for clicado
document.querySelector('form').addEventListener('submit', function(event) {
    // Seleciona os campos do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Verifica se todos os campos estão preenchidos
    if (nome === '' || telefone === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.'); // Exibe um alerta se houver campos vazios
        event.preventDefault(); // Evita o envio do formulário até que os campos sejam preenchidos
    } else {
        form.reset();
    }
});
