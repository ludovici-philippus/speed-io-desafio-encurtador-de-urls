# Speed IO Desafio Encurtador de URLs

Projeto de encurtador de urls, feito com VueJS e NodeJS para o desafio da Speed IO

## Requisitos:

- NPM ou Yarn
- Git
- MySQL / MariaDB

## Instalando dependências:

- Clone o repositório com: git clone https://github.com/ludovici-philippus/speed-io-desafio-encurtador-de-urls.git
- Acesse o projeto: cd speed-io-desafio-encurtador-de-urls

### Linux

No Linux existem duas formas de prosseguir com a instalação: a forma automatizada e a manual.

### Automatizada:

A forma automatizada se dá com a execução do script install.sh, que executa o comando npm install na raiz e na pasta da API. Para prosseguir dessa forma:

- Primeiro, dê permissões ao script install.sh com: sudo chmod 777 ./install.sh
- Depois, executê-o com: ./install

### Manual:

- Execute o comando: npm install ou yarn install na pasta raiz e na pasta da API.

### Windows

### Manual:

- Execute o comando: npm install ou yarn install na pasta raiz e na pasta da API.

## Banco de Dados

O banco de dados utilizado é o MariaDB, o arquivo com as tabelas foi disponibilizado no repositório com o nome "encurtador_links.sql". Ele pode ser importado de duas formas: Algum painel gráfico para gerenciamento de banco de dados (PHPMyAdmin) ou pelo terminal.

### PHPMyAdmin:

- Abra o PHPMyAdmin;
- Crie um novo banco de dados com o nome de: "encurtador_links"
- Selecione o novo banco de dados e clique em: "Import".
- Lá dentro, clique em Browse, selecione o arquivo e clique em Go.

### Terminal:

- Inicie o seu banco de dados com o comando: mariadb ou mysql, dentro da raiz do projeto.
- Crie um novo banco de dados com: "CREATE DATABASE encurtador_links;".
- Entre no banco de dados recém criado: "USE encurtador_links;".
- Importe as tabelas com o comando: "source ./encurtador_links.sql;"

Feito isso, abra o arquivo: db.js, na pasta da API e faça as devidas configurações (HOST, USER, PASSWORD, DATABASE), para que a API possa se conectar ao banco de dados.

## Como executar o projeto

- Acesse a pasta da api e execute o comando: node index.js, isso ira iniciar o servidor node em: http://localhost:5000.
- Com o backend iniciado, inicie o front com: npm run dev, dentro da pasta raiz do projeto, isso o iniciará em: http://localhost:3000.

## Como modificar o endereço da API para produção

Caso o projeto seja posto em produção, a única coisa que precisará ser mudadá será o arquivo index.js dentro de store, lá dentro existe um state api_path que denota o caminho para a API, portanto para produção, basta trocar o http://localhost:5000 para o domínio próprio.

## Vídeo de Demonstração


https://user-images.githubusercontent.com/37634205/156067063-74b64767-205c-4020-92e7-646098ae2453.mp4



