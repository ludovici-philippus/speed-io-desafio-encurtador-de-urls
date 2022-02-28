import { mount } from '@vue/test-utils'
import LinkGerado from '@/components/LinkGerado.vue'

describe('Testes no componente LinkGerado', () => {
  let $store
  let container

  beforeAll(() => {
    $store = {
      getters: {
        getLinkNovo: 'linkzinho',
        getTitulo: 'Título',
      },
    }

    container = mount(LinkGerado, {
      mocks: {
        $store,
      },
    })
  })

  test('URL encurtada é igual a getLinkNovo', () => {
    const link_novo = container.find('a').attributes().href
    expect(link_novo).toBe($store.getters.getLinkNovo)
  })

  test('Título é igual a getTitulo', () => {
    const link_novo_titulo = container.find('a').text()
    expect(link_novo_titulo).toBe($store.getters.getTitulo)
  })
})
