import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

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
})
