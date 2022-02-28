import { shallowMount } from '@vue/test-utils'
import FazerLogin from '@/components/FazerLogin.vue'

describe('Testando os métodos do componente FazerLogin', () => {
  let fetch
  let $store

  beforeAll(() => {
    fetch = require('node-fetch')

    $store = {
      getters: {
        getApiPath: 'http://localhost:5000/',
      },
      commit: jest.fn(),
    }
  })

  test('Logado True - Método login', async () => {
    const $axios = {
      post: async function (params) {
        const response = {
          data: {
            logado: true,
          },
        }
        return response
      },
    }

    const container = shallowMount(FazerLogin, {
      mocks: {
        $store,
        $axios,
      },
    })

    window.alert = (it) => {
      expect(it).toBe('Logado com sucesso!')
    }
    await container.vm.login()
  })

  test('Logado False - Método login', async () => {
    const $axios = {
      post: async function (params) {
        const response = {
          data: {
            logado: false,
          },
        }
        return response
      },
    }

    const container = shallowMount(FazerLogin, {
      mocks: {
        $store,
        $axios,
      },
    })

    window.alert = (it) => {
      expect(it).toBe('Nome de usuário ou senha incorretos!')
    }
    await container.vm.login()
  })

  test('Teste método estaVazio', async () => {
    const $axios = {
      post: async function (params) {
        const response = {
          data: {
            logado: false,
          },
        }
        return response
      },
    }

    const container = shallowMount(FazerLogin, {
      mocks: {
        $store,
        $axios,
      },
    })
    expect(container.vm.estaVazio(['', ''])).toBe(true)
    expect(container.vm.estaVazio(['teste', 'teste'])).toBe(false)
  })

  test('Método Criar - Response Conseguiu True', async () => {
    const $axios = {
      post: async function (params) {
        const response = {
          data: {
            conseguiu: true,
          },
        }
        return response
      },
    }

    const container = shallowMount(FazerLogin, {
      mocks: {
        $store,
        $axios,
      },
    })

    window.alert = (it) => {
      expect(it).toBe('Conta criada com sucesso')
    }

    await container.vm.criar()
  })

  test('Método Criar - Response Conseguiu False', async () => {
    const $axios = {
      post: async function (params) {
        const response = {
          data: {
            conseguiu: false,
          },
        }
        return response
      },
    }

    const container = shallowMount(FazerLogin, {
      mocks: {
        $store,
        $axios,
      },
    })

    window.alert = (it) => {
      expect(it).toBe(
        'Falha ao criar conta. Nome de usuário ou e-mail já existe!'
      )
    }

    await container.vm.criar()
  })
})
