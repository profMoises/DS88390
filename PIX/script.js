// Seleciona o formulário e os elementos da página
const pixForm = document.getElementById('pixForm');
const qrcodeContainer = document.getElementById('qrcodeContainer');
const qrcodeImage = document.getElementById('qrcodeImage');

// Configuração do acesso à API Gerencianet
const API_BASE_URL = "https://api.gerencianet.com.br/v1";
const CLIENT_ID = "seu_client_id"; // Substitua pelo seu CLIENT_ID
const CLIENT_SECRET = "seu_client_secret"; // Substitua pelo seu CLIENT_SECRET

// Função para obter o token de autenticação
async function getAuthToken() {
    try {
        const response = await fetch(`${API_BASE_URL}/authorize`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }),
        });

        if (!response.ok) throw new Error("Falha na autenticação");
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        alert("Erro ao obter token de autenticação: " + error.message);
        throw error;
    }
}

// Manipula o envio do formulário
pixForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obtém o valor informado pelo usuário
    const amount = document.getElementById('amount').value;

    if (!amount || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    try {
        // Obter o token de autenticação
        const token = await getAuthToken();

        // Envia a solicitação para gerar o QR Code do Pix
        const response = await fetch(`${API_BASE_URL}/pix/qrcodes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                calendario: { expiracao: 3600 }, // QR Code expira em 1 hora
                valor: { original: parseFloat(amount).toFixed(2) },
                chave: "sua_chave_pix", // Substitua pela sua chave Pix cadastrada
                infoAdicionais: [
                    { nome: "Descrição", valor: "Pagamento via Pix" }
                ]
            }),
        });

        if (!response.ok) throw new Error("Erro ao gerar QR Code");

        const data = await response.json();

        // Exibe o QR Code na página
        qrcodeImage.src = data.qrcode; // URL do QR Code
        qrcodeContainer.classList.remove('hidden');
    } catch (error) {
        alert("Erro ao processar o pagamento: " + error.message);
    }
});
