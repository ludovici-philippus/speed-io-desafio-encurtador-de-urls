import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'

describe('Testando respostas da API', () => {
  let fetch
  let api_path

  beforeAll(() => {
    fetch = require('node-fetch')
    api_path = 'http://localhost:5000'
  })

  test('Conexão', async () => {
    const consegue_conectar = await fetch(api_path)
      .then((response) => response.text())
      .then(function (body) {
        return body
      })
    expect(consegue_conectar).toBe('Conectado')
  })

  test('Código', async () => {
    const codigo = await fetch(api_path).then(function (response) {
      return response.status
    })
    expect(codigo).toBe(200)
  })
})
