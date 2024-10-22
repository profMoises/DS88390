
document.querySelector('form').addEventListener('submit', function(event) {
    // Seleciona os campos do formulário
    
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Verifica se todos os campos estão preenchidos
    if ( email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.'); // Exibe um alerta se houver campos vazios
        event.preventDefault(); // Evita o envio do formulário até que os campos sejam preenchidos
    } else {
        form.reset();
    }
});
