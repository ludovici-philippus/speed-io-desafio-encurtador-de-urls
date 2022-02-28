import { mount } from '@vue/test-utils'
import Home from '@/components/Main.vue'

describe('Testes com o componente Main, da página principal', () => {
  test('Inicializado com sucesso!', () => {
    expect(true).toBe(true)
  })

  test('Componente CriarLink gerado', () => {
    const $store = {
      getters: {
        getGerou: false,
        getLinkValido: true,
      },
    }

    const container = mount(Home, {
      mocks: {
        $store,
      },
    })
    const criarLink = container.findComponent('criarlink')
    expect(criarLink.exists()).toBe(true)
  })

  test('Componente LinkGerado aparece quando o getter getGerou é true', () => {
    const $store = {
      getters: {
        getGerou: true,
        getLinkValido: true,
      },
    }

    const container = mount(Home, {
      mocks: {
        $store,
      },
    })

    const linkGerado = container.findComponent('linkgerado')
    expect(linkGerado.exists()).toBe(true)
  })

  test('CardErro aparece quando o getter getLinkValido é falso', () => {
    const $store = {
      getters: {
        getGerou: false,
        getLinkValido: false,
      },
    }

    const container = mount(Home, {
      mocks: {
        $store,
      },
    })

    const cardErro = container.findComponent('carderro')
    expect(cardErro.exists()).toBe(true)
  })

  test('Quando getLinkValido é false, o componente linkGerado não é renderizado', () => {
    const $store = {
      getters: {
        getGerou: true,
        getLinkValido: false,
      },
    }

    const container = mount(Home, {
      mocks: {
        $store,
      },
    })

    const cardErro = container.findComponent('carderro')
    const linkGerado = container.findComponent('linkgerado')

    expect(cardErro.exists()).toBe(true)
    expect(linkGerado.exists()).toBe(false)
  })
})
