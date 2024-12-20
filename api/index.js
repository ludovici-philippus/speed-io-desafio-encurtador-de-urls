/* IMPORTAÇÃO DOS MÓDULOS PARA INICIALIZAÇÃO DO SERVIDOR */
const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const db = require('./db.js')

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(
  session({
    secret: 'secretsession-23141129142',
    saveUninitialized: false,
    resave: false,
  })
)

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

var sess = { usuario: false, unid: -1 }

app.get('/is-logged', async (req, res) => {
  if (!sess.usuario) {
    const json_data = '{"logado":false}'
    const json_parsed = JSON.parse(json_data)
    res.jsonp(json_parsed)
  } else {
    const json_data = '{"logado":true}'
    const json_parsed = JSON.parse(json_data)
    res.jsonp(json_parsed)
  }
})

app.post('/login', async (req, res) => {
  const email = req.body.email_post
  const senha = req.body.senha_post

  const sql = await db.connect()
  const [row] = await sql.execute(
    'SELECT * FROM `tb_users` WHERE email = ? AND senha = ?',
    [email, senha]
  )
  if (row.length == 1) {
    sess = req.session
    sess.usuario = true
    sess.unid = row[0].id
    sess.nome = row[0].usuario

    const json_data = '{"logado":true}'
    const json_parsed = JSON.parse(json_data)
    res.jsonp(json_parsed)
  } else {
    const json_data = '{"logado":false}'
    const json_parsed = JSON.parse(json_data)
    res.jsonp(json_parsed)
  }
})

app.post('/cadastro', async (req, res) => {
  const username = req.body.username_post
  const email = req.body.email_post
  const senha = req.body.senha_post

  const sql = await db.connect()
  const [row] = await sql.execute(
    'SELECT * FROM `tb_users` WHERE usuario = ? OR email = ?',
    [username, email]
  )

  if (row.length != 0) {
    const json_data = '{"conseguiu":false, "msg": "Conta já existe!"}'
    const json_parsed = JSON.parse(json_data)
    res.jsonp(json_parsed)
  } else {
    await sql.execute('INSERT INTO `tb_users` VALUES (null, ?, ?, ?)', [
      username,
      email,
      senha,
    ])
    const json_data = '{"conseguiu":true, "msg": "Conta criada com sucesso!"}'
    const json_parsed = JSON.parse(json_data)
    res.json(json_parsed)
  }
})

app.get('/sair', async (req, res) => {
  sess = { usuario: false, unid: -1 }
  res.end()
})

app.get('/', async (req, res) => {
  const sql = await db.connect()
  const [row] = await sql.execute('SELECT * FROM `tb_links`')
  res.end('Conectado')
})

app.post('/get-urls', async (req, res) => {
  const sql = await db.connect()
  if (req.body.somente_os_meus == false) {
    const [row] = await sql.execute(
      'SELECT * FROM `tb_links` ORDER BY views DESC'
    )
    res.jsonp(row)
  } else if (req.body.somente_os_meus == true && sess.unid != -1) {
    const [row] = await sql.execute(
      'SELECT * FROM `tb_links` WHERE id_usuario = ? ORDER BY views DESC',
      [sess.unid]
    )
    res.jsonp(row)
  }
})

app.get('/deletar', async (req, res) => {
  const id = req.query.id
  if (id == -1) res.end('Deletado com sucesso! (Teste)')
  else {
    const sql = await db.connect()
    if (sess.unid != -1) {
      const [row] = await sql.execute(
        'DELETE FROM `tb_links` WHERE id = ? AND id_usuario = ?',
        [id, sess.unid]
      )
      res.end('Deletado com sucesso!')
    }
  }
})

app.get('/:slug', async (req, res) => {
  const sql = await db.connect()
  const [row] = await sql.execute(
    'SELECT link_original FROM `tb_links` WHERE link_encurtado = ?',
    [req.params.slug]
  )
  if (row.length == 1) {
    await add_view_to_link(req, sql)
    res.writeHead(302, {
      location: row[0].link_original,
    })
    res.end('Existe!')
  } else {
    res.end('Não existe')
  }
})

app.get('/exists/:slug', async (req, res) => {
  /*Verifica se determinado link já existe no banco de dados.*/
  const sql = await db.connect()
  const [row] = await sql.execute(
    'SELECT link_encurtado FROM `tb_links` WHERE link_encurtado = ?',
    [req.params.slug]
  )
  if (row.length == 0 && req.query.link_original != 'http://') {
    await create_short_link(req, sql)
    let jsonData = '{"existe": "false"}'
    let jsonParsed = JSON.parse(jsonData)
    res.jsonp(jsonParsed)
  } else {
    let jsonData = '{"existe": "true"}'
    let jsonParsed = JSON.parse(jsonData)
    res.jsonp(jsonParsed)
  }
})

async function create_short_link(req, sql) {
  const titulo = req.query.titulo
  const link_original = req.query.link_original
  const link_novo = req.query.link_novo

  if (sess.unid == -1)
    await sql.execute(
      'INSERT INTO `tb_links` VALUES (null, ?, ?, ?, null, 0)',
      [titulo, link_original, link_novo]
    )
  else {
    await sql.execute('INSERT INTO `tb_links` VALUES (null, ?, ?, ?, ?, 0)', [
      titulo,
      link_original,
      link_novo,
      sess.unid,
    ])
  }
}

async function add_view_to_link(req, sql) {
  await sql.execute(
    'UPDATE `tb_links` SET views = views+1 WHERE link_encurtado = ?',
    [req.params.slug]
  )
}

app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000!')
})
