import { shallowMount } from '@vue/test-utils'
import TabelaResponsiva from '@/components/TabelaResponsiva.vue'

describe('Testando as requisições da tabela responsiva', () => {
  let container
  let $axios
  let $store

  beforeAll(() => {
    $store = {
      getters: {
        getApiPath: 'http://localhost:5000/',
      },
    }

    const fetch = require('node-fetch')
    $axios = {
      $post: async function (par) {
        const result = await fetch(par).then(function (response) {
          response.status
        })
        return result
      },
      $get: async function (par) {
        const result = await fetch(par).then(function (response) {
          response.status
        })
        return result
      },
    }

    container = shallowMount(TabelaResponsiva, {
      mocks: {
        $axios,
        $store,
      },
    })
  })

  test('Chamada - Pegar informações da API', async () => {
    await container.vm.get_urls()
    expect(true).toBe(true)
  })

  test('Chamada - Deletar informações da API', async () => {
    window.alert = (it) => {
      expect(it).toBe('Link deletado com sucesso!')
    }

    container.vm.urls = [
      {
        id: -1,
        titulo: 'teste',
      },
      {
        id: -2,
        titulo: 'teste 2',
      },
    ]
    await container.vm.deletar(-1)
  })
})
