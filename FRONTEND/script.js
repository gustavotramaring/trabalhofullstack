document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const infoPessoa = {
        cpf,
        nome,
        telefone,
    };
    try {
        const response = await fetch(`http://localhost:3000/api/pessoas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoPessoa)
        });
        
        const result = await response.json();

        if(response.ok) {
            document.getElementById('message').innerText = 'Pessoa cadastrada com sucesso!';
            document.getElementById('formPessoa').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = ('Erro na comunicação com o servidor');  
    }
});