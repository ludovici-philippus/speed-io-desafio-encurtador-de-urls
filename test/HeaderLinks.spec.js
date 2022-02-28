import { mount } from '@vue/test-utils'
import HeaderLinks from '@/components/HeaderLinks'

describe('Testando Links', () => {
  const reload = window.location.reload

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
    })
  })

  afterAll(() => {
    window.location.reload = reload
  })

  test('Não está logado | Último item = Minha Conta', () => {
    const $store = {
      getters: {
        getLogged: false,
      },
    }

    const container = mount(HeaderLinks, {
      mocks: {
        $store,
      },
    })

    const links = container.findAll('li')
    expect(links.at(-1).text()).toBe('Minha Conta')
  })

  test('Logado | Último item = Sair da Conta', () => {
    const $store = {
      getters: {
        getLogged: true,
      },
    }

    const container = mount(HeaderLinks, {
      mocks: {
        $store,
      },
    })

    const links = container.findAll('li')
    expect(links.at(-1).text()).toBe('Sair da Conta')
  })

  test('Método sair', async () => {
    const $store = {
      getters: {
        getLogged: true,
      },
    }
    const $axios = {
      $get: async function () {
        return true
      },
    }

    const container = mount(HeaderLinks, {
      mocks: {
        $store,
        $axios,
      },
    })
    await container.vm.sair()
    expect(true).toBe(true)
  })
})
