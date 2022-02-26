/* IMPORTAÇÃO DOS MÓDULOS PARA INICIALIZAÇÃO DO SERVIDOR */
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

/*Definindo Headers necessários para o funcionamento da API em localhost*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/*==FIM==*/

app.get("/", (req, res, next) => {
  res.end("aaaa");
});

app.listen(5000, ()=>{
	console.log("Servidor começo, homi do céu!");
});
