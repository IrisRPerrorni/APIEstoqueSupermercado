// Função para fazer uma solicitação GET para a API e exibir todos os produtos

document.getElementById("listarProdutos").addEventListener("click", function () {
    fetch('http://localhost:8080/api/produtos') 
        .then(response => response.json())
        .then(data => {
            const listaProdutos = document.getElementById("listaProdutos");
            listaProdutos.style.display = "block";
            listaProdutos.innerHTML = "";

            data.forEach(produto => {
                const item = document.createElement("li");
                item.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Preço: $${produto.preco}, Quantidade em Estoque: ${produto.qtd}`;
                listaProdutos.appendChild(item);
            });
        })
        .catch(error => console.error(error));
});

//função para ocultar lista

document.getElementById("ocultarLista").addEventListener("click", function () {
    const listaProdutos = document.getElementById("listaProdutos");
    listaProdutos.style.display = "none"; // Define a propriedade display como "none" para ocultar a lista.
});


// Função para fazer uma solicitação GET para a API e exibir um produto especifico

document.getElementById("exibirProduto").addEventListener("click", function () {
    const produtoId = parseInt(document.getElementById("produtoId").value);
    const produtoEspecifico = document.getElementById("produtoEspecifico");
    produtoEspecifico.style.display="block";
    produtoEspecifico.innerHTML = "";


    fetch(`http://localhost:8080/api/produtos/${produtoId}`) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na solicitação.');
            }
            return response.json();
        })
        .then(produto => {
            if (produto) {
                produtoEspecifico.textContent = `Nome: ${produto.nome}, Descrição: ${produto.descricao}, Preço: $${produto.preco}, Quantidade em Estoque: ${produto.qtd}`;
            } else {
                produtoEspecifico.textContent = "Produto não encontrado.";
            }
        })
        .catch(error => {
            console.error(error);
            produtoEspecifico.textContent = "Erro na solicitação.";
        });
});

//função para ocultar produto

document.getElementById("ocultarProduto").addEventListener("click", function () {
    const produtoEspecifico = document.getElementById("produtoEspecifico");
    produtoEspecifico.style.display = "none"; // Define a propriedade display como "none" para ocultar a lista.
});


// Função para cadastrar um novo produto

document.getElementById("cadastrarProduto").addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const qtd = parseInt(document.getElementById("qtd").value);

    const novoProduto = {
        nome,
        descricao,
        preco,
        qtd,
    };

    fetch('http://localhost:8080/api/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto),
    })
        .then(response => response.json())
        .then(data => {
            
            document.getElementById("cadastroForm").reset();
            alert("Cadastro feito com sucesso!");
        })
        .catch(error => console.error(error));
});
