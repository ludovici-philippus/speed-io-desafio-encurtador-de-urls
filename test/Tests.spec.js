import { mount } from '@vue/test-utils'
import NuxtLink from "nuxt"
import Header from '@/components/Header.vue'
import HeaderLinks from '@/components/HeaderLinks.vue'
import Main from "@/components/Main.vue";
import Store from "@/store/index.js";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";


describe('Header', () => {
  test('Título correto', () => {
    const container = mount(Header);
    const title = container.find('h1');

    expect(title.text()).toBe('Encurtador de URLs');
  })
  test('Lema correto', () => {
    const container = mount(Header);
    const lema = container.find('p');

    expect(lema.text()).toBe('Ninguém gosta de links enormes e complexos, mantenha-os simples conosco!');
  })
  test('Links corretos', () => {
    const container = mount(HeaderLinks);

    const link_single = container.findAll('li');
    expect(link_single.at(0).text()).toBe('Home');
    expect(link_single.at(1).text()).toBe('Top 100');
  })
});

describe("Main", () => {
  const commit = jest.fn();
  const messages = {};
  const mockFetchPromise = Promise.resolve({
    data: messages
  });

  $axios.$get = jest.fn()
})


