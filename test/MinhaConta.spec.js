import { shallowMount } from '@vue/test-utils'
import minhaConta from '@/pages/minha-conta.vue'

describe('Teste da página minha conta', () => {
  let container
  let $axios
  let $store

  beforeAll(() => {
    $store = {
      getters: {
        getApiPath: 'http://localhost:5000',
      },
      commit: jest.fn(),
    }

    $axios = {
      $get: async function () {
        return true
      },
    }

    container = shallowMount(minhaConta, {
      mocks: {
        $axios,
        $store,
      },
    })
  })

  test('Testando método check_login', async () => {
    container.vm.check_login()
  })
})
