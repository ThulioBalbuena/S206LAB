# Testes de API com JSONPlaceholder

Este repositório contém uma coleção de testes de API para a plataforma [JSONPlaceholder](https://jsonplaceholder.typicode.com/), com seis cenários de teste para verificar as funcionalidades de CRUD.

## Casos de Teste

1. **Obter lista de posts**  
   - Verifica se a API retorna uma lista de posts com as propriedades esperadas.

2. **Obter um post específico**  
   - Verifica se é possível buscar os detalhes de um post específico pelo ID, confirmando que as informações estão corretas.

3. **Criar um novo post**  
   - Verifica se a API permite criar um novo post, retornando o status correto e as informações do post criado.

4. **Atualizar um post existente**  
   - Verifica se a API permite atualizar um post existente com novos dados e se a resposta contém as informações atualizadas.

5. **Buscar um post inexistente** (caso negativo)  
   - Tenta acessar um post com um ID que não existe e verifica se a resposta da API indica que o recurso não foi encontrado.

6. **Criar um post em um endpoint específico** (caso negativo)  
   - Envia uma requisição `POST` para o endpoint `/posts/10`, que já contém um identificador específico. Esse uso do `POST` é incorreto, pois a criação de novos recursos deve ser feita em `/posts` (sem um ID). Verifica se a API lida corretamente com essa situação, idealmente retornando um erro.
   
## Pré-requisitos

- [Node.js](https://nodejs.org/) e [Newman](https://www.npmjs.com/package/newman) instalados:
  ```bash
  npm install -g newman
  npm install -g newman-reporter-htmlextra
  npm i


## Executar os testes
  ```bash
  git clone https://github.com/ThulioBalbuena/S206LAB.git
  cd Lista_Postman
  newman run "PlaceHolder.postman_collection.json" -e "PlaceHolder.postman_environment.json" -r htmlextra