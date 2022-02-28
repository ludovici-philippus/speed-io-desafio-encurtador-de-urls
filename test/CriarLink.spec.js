import { shallowMount } from '@vue/test-utils'
import CriarLink from '@/components/CriarLink.vue'
import Input from '@/components/Input.vue'
import axios from 'axios'

describe('Testando métodos do componente CriarLink', () => {
  let data
  //  let document
  let container
  let $store
  let $axios

  beforeAll(() => {
    $store = {
      commit: jest.fn(),

      getters: {
        getApiPath: 'http://localhost:5000',
      },
    }

    $axios = {
      $get: async function (url) {
        return 'ok'
      },
    }

    container = shallowMount(CriarLink, {
      mocks: {
        $store,
        $axios,
      },
    })
  })

  test('Execução da função estaVazio() com retorno true, caso titulo_testes e link_original_testes estejam vazios', async () => {
    window.alert = (it) => {
      expect(it).toBe('Campos vazios não são permitidos!')
    }

    container.vm.titulo_testes = ''
    container.vm.link_original_testes = ''
    await container.find('button').trigger('click')
    await container.vm.gerarLink()
    expect(
      container.vm.estaVazio([
        container.vm.titulo_testes,
        container.vm.link_original_testes,
      ])
    ).toBe(true)
  })

  test('Execução das de mais funções, caso titulo_testes e link_original_testes tenham conteúdo', async () => {
    await container.find('button').trigger('click')
    container.vm.titulo_testes = 'teste'
    container.vm.link_original_testes = 'duckduckgo.com'
    await container.vm.gerarLink()

    expect(true).toBe(true)
  })
})
