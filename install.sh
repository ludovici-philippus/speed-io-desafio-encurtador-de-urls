#/bin/sh
echo "Instalando as dependências para o VueJS"
npm install

echo "Dependências instaladas com sucesso!"
echo "Instalando as dependêncais para o NodeJS"
cd ./api && npm install

echo "Instalação realizada com sucesso!"
echo "1. Para executar o projeto, entre na pasta da api e inicie-a: node index.js"
echo "2. Depois execute o front-end, na pasta raiz: npm run dev"
