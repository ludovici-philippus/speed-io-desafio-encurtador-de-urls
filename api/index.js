/* IMPORTAÇÃO DOS MÓDULOS PARA INICIALIZAÇÃO DO SERVIDOR */
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const db = require("./db.js");

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(
  session({
    secret: 'secretsession',
    saveUninitialized: false,
    resave: false
  })
);

/*Definindo Headers necessários para o funcionamento da API em localhost*/
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
/*==FIM==*/

app.get('/', async (req, res) => {
  const sql = await db.connect();
  const [row] = await sql.execute("SELECT * FROM `tb_links`")
  res.end('aaaa')
});

app.get("/get-urls", async(req, res) => {
  const sql = await db.connect();
  const [row] = await sql.execute("SELECT * FROM `tb_links` ORDER BY views DESC");
  res.jsonp(row);
});

app.get("/:slug", async (req, res) => {
  const sql = await db.connect();
  const [row] = await sql.execute("SELECT link_original FROM `tb_links` WHERE link_encurtado = ?", [req.params.slug]);
  if(row.length == 1){
    await add_view_to_link(req, sql);
    res.writeHead(302, {
      location: row[0].link_original
    });
    res.end("Existe!");
  }
  else{
    res.end("Não existe");
  }

})

app.get("/exists/:slug", async(req, res) => {
    /*Verifica se determinado link já existe no banco de dados.*/
    const sql = await db.connect();
    const [row] = await sql.execute("SELECT link_encurtado FROM `tb_links` WHERE link_encurtado = ?", [req.params.slug]);
    if(row.length == 0){
      await create_short_link(req, sql);
      let jsonData = '{"existe": "false"}';
      let jsonParsed = JSON.parse(jsonData);
      res.jsonp(jsonParsed);
    }
    else{
      let jsonData = '{"existe": "true"}';
      let jsonParsed = JSON.parse(jsonData);
      res.jsonp(jsonParsed);
    }
});

async function create_short_link(req, sql){
      const titulo = req.query.titulo;
      const link_original = req.query.link_original;
      const link_novo = req.query.link_novo;

      await sql.execute("INSERT INTO `tb_links` VALUES (null, ?, ?, ?, null, 0)", [titulo, link_original, link_novo]);
}

async function add_view_to_link(req, sql){
  await sql.execute("UPDATE `tb_links` SET views = views+1 WHERE link_encurtado = ?", [req.params.slug])
}

app.listen(5000, () => {
  console.log('Servidor começo, homi do céu!')
})
