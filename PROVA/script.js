// Seleciona o formulário e adiciona um evento para o envio
document.querySelector('form').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Seleciona os campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const details = document.getElementById('details').value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !details) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verifica se o email é válido usando uma expressão regular
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Dados do formulário em um objeto
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('details', details);

    // Envia os dados do formulário usando AJAX (fetch)
    fetch('processForm.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message); // Exibe a mensagem de sucesso
            document.querySelector('form').reset(); // Limpa o formulário
        } else {
            alert(data.message); // Exibe a mensagem de erro
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
    });
});
