// Função para validar o formulário antes do envio
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (nome === '' || email === '' || telefone === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.'); // Alerta se algum campo estiver vazio
        event.preventDefault(); // Impede o envio do formulário
    }
});
