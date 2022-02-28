import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import HeaderLinks from '@/components/HeaderLinks.vue'
import NuxtLink from 'nuxt'
import { createStore } from 'vuex'

describe('Header', () => {
  test('Iniciado corretamente', () => {
    expect(true).toBe(true)
  })

  test('Título correto', () => {
    const container = mount(Header)
    const title = container.find('h1')

    expect(title.text()).toBe('Encurtador de URLs')
  })
  test('Lema correto', () => {
    const container = mount(Header)
    const lema = container.find('p')

    expect(lema.text()).toMatch(
      /Ninguém gosta de links enormes e complexos, mantenha-os simples/
    )
  })
  /*
  test("Não está logado", () => {
    const store = createStore({
      state() {
        return { logged: false }
      },
      getters:{
        getLogged: function(state){
          return state.logged;
        }
      }
    })

    const wrapper = mount(HeaderLinks, {
      global: {
        plugins: [store]
      }
    })
    const links = container.findAll('li')

    expect(title.text().at(-1)).notToBe("Minha Conta");
  })
*/
})
