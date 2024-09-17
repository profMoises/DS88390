// Função para adicionar números ou operadores ao display
function appendToDisplay(value) {
    // Obtém o elemento de display pelo ID 'display' e adiciona o valor clicado ao final
    document.getElementById('display').value += value;
  }
  
  // Função para calcular o resultado da expressão no display
  function calculate() {
    try {
      // Usa a função 'eval()' para avaliar a expressão matemática inserida no display
      // 'eval()' tenta calcular a expressão e retorna o resultado
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      // Caso ocorra um erro (ex.: expressão inválida), exibe a palavra "Erro" no display
      document.getElementById('display').value = 'Erro';
    }
  }
  
  // Função para limpar todo o display
  function clearDisplay() {
    // Define o valor do display como uma string vazia, limpando-o
    document.getElementById('display').value = '';
  }
  
  // Função para apagar o último caractere no display
  function deleteLast() {
    // Obtém o valor atual do display
    let currentDisplay = document.getElementById('display').value;
    // Define o valor do display como ele mesmo, mas removendo o último caractere
    document.getElementById('display').value = currentDisplay.slice(0, -1);
  }
  