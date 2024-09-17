// Quando o documento HTML for completamente carregado, executa a função anônima
document.addEventListener('DOMContentLoaded', function() {
    // Carrega os itens do estoque quando a página é carregada
    loadItems();

    // Adiciona um ouvinte de evento para o formulário de adicionar item
    // Quando o formulário for enviado, executa a função para adicionar o item
    document.getElementById('add-form').addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();
        // Chama a função para adicionar um item ao estoque
        addItem();
    });
});

// Função para carregar os itens do estoque do servidor
function loadItems() {
    // Faz uma requisição GET ao servidor para obter a lista de itens
    fetch('server.php?action=get_items')
        // Converte a resposta recebida em formato JSON
        .then(response => response.json())
        // Executa esta função quando os dados são carregados com sucesso
        .then(data => {
            // Obtém o elemento HTML que contém a lista de itens
            const itemList = document.getElementById('item-list');
            // Limpa qualquer conteúdo anterior na lista de itens
            itemList.innerHTML = '';
            // Itera sobre cada item recebido do servidor
            data.forEach(item => {
                // Cria um novo elemento de lista (<li>) para cada item
                const li = document.createElement('li');
                // Define o conteúdo de texto do item com o nome, quantidade e preço
                li.textContent = `${item.nome} - Quantidade: ${item.quantidade} - Preço: R$ ${item.preco}`;
                // Adiciona o item criado à lista no HTML
                itemList.appendChild(li);
            });
        });
}

// Função para adicionar um item ao estoque
function addItem() {
    // Obtém o valor do campo de nome do item
    const nome = document.getElementById('nome').value;
    // Obtém o valor do campo de quantidade do item
    const quantidade = document.getElementById('quantidade').value;
    // Obtém o valor do campo de preço do item
    const preco = document.getElementById('preco').value;

    // Faz uma requisição POST ao servidor para adicionar o novo item
    fetch('server.php?action=add_item', {
        // Define o método HTTP como POST
        method: 'POST',
        // Define o tipo de conteúdo como JSON
        headers: {
            'Content-Type': 'application/json',
        },
        // Converte os dados do item em uma string JSON e os envia no corpo da requisição
        body: JSON.stringify({ nome, quantidade, preco }),
    })
    // Converte a resposta do servidor em formato JSON
    .then(response => response.json())
    // Executa esta função após receber a resposta do servidor
    .then(data => {
        // Verifica se o item foi adicionado com sucesso
        if (data.success) {
            // Se sim, recarrega a lista de itens para mostrar o novo item
            loadItems();
            // Reseta o formulário para limpar os campos
            document.getElementById('add-form').reset();
        } else {
            // Se não, exibe uma mensagem de erro ao usuário
            alert('Erro ao adicionar item.');
        }
    });
}


/*
    document.addEventListener('DOMContentLoaded', ...):

A função passada como argumento é executada assim que o documento HTML é carregado e pronto para ser manipulado. Isso garante que o código só tente manipular o DOM depois que ele estiver completamente carregado.
loadItems();:

Chama a função loadItems para buscar e exibir os itens do estoque ao carregar a página.
document.getElementById('add-form').addEventListener('submit', ...):

Adiciona um ouvinte de evento ao formulário de adicionar item. Quando o formulário é enviado, ele chama a função addItem.
event.preventDefault();:

Evita o comportamento padrão do formulário, que seria enviar os dados via HTTP e recarregar a página. Isso permite que a requisição seja tratada de forma assíncrona com JavaScript.
Função loadItems():

Faz uma requisição ao servidor para obter a lista de itens do estoque.
Usa fetch para fazer uma requisição GET à URL server.php?action=get_items.
Quando a resposta chega, ela é convertida para JSON e a função manipula esses dados para atualizar a lista de itens na página.
Para cada item retornado, ele cria um novo elemento de lista <li> e o adiciona ao HTML.
Função addItem():

Coleta os valores dos campos de entrada (nome, quantidade, preco) que o usuário preenche no formulário.
Envia esses dados para o servidor usando uma requisição POST com o método fetch. Os dados são convertidos para o formato JSON antes de serem enviados.
A resposta do servidor é processada. Se o item for adicionado com sucesso (data.success for verdadeiro), a lista de itens é recarregada e o formulário é resetado.
Se houver um erro no processo de adição do item, uma mensagem de erro é exibida com alert.

Explicação adaptada por IA


*/ 