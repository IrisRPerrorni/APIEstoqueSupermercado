# API FULLSTACK ESTOQUE SUPERMERCADO

Este documento descreve as funcionalidades de um sistema de gerenciamento de estoque de produtos, bem como os requisitos para sua implementação. O sistema é responsável por exibir produtos em estoque, permitir a visualização de um produto específico e possibilitar o cadastro de novos produtos do tipo livro. Além disso, o sistema utiliza um banco de dados H2 e possui uma interface de usuário.

## Funcionalidades
### 1. Exibir Todos os Produtos no Estoque
Esta funcionalidade permite que o usuário visualize todos os produtos disponíveis no estoque. Os produtos serão exibidos na interface do usuário em uma lista ou tabela, exibindo informações como nome, descrição, preço e quantidade disponível.

Implementação
- Acesse o banco de dados H2 para recuperar a lista de produtos em estoque.
- Renderize uma página na interface do usuário que exiba os produtos em um formato legível, como uma tabela HTML.

### 2. Exibir um Produto Específico
Esta funcionalidade permite ao usuário visualizar detalhes específicos de um produto em estoque. O usuário deve ser capaz de procurar um produto pelo seu identificador único e visualizar informações detalhadas sobre esse produto.

Implementação
- Forneça um campo de pesquisa na interface do usuário para inserir o identificador do produto.
- Renderize uma página na interface do usuário que exiba os detalhes do produto encontrado.
  
### 3. Cadastro de um Produto Livro
Esta funcionalidade permite ao usuário cadastrar um novo produto no estoque. O usuário deve fornecer informações como nome , descrição , preço e quantidade.

Implementação
- Crie um formulário na interface do usuário para que o usuário insira os detalhes do produto a ser cadastrado.
- Ao enviar o formulário, valide os dados inseridos e insira o novo produto no banco de dados H2.


## Requisitos
### 1. Utilizar o Banco de Dados H2
O sistema deve utilizar o banco de dados H2 para armazenar informações sobre os produtos em estoque. O H2 é um banco de dados em memória que pode ser facilmente configurado e utilizado em aplicações Java.

### 2. Criar uma Página de Interação com o Usuário
O sistema deve ter uma interface de usuário que permita aos usuários interagirem com as funcionalidades mencionadas acima. 

## Considerações Finais
Este documento descreve as principais funcionalidades e requisitos do sistema de gerenciamento de estoque de produtos. A implementação dessas funcionalidades envolverá o desenvolvimento de código, a criação de interfaces de usuário e a configuração do banco de dados H2. Certifique-se de testar e validar o sistema para garantir seu bom funcionamento antes de disponibilizá-lo para os usuários finais.
