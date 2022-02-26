import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue';
import HeaderLinks from "@/components/HeaderLinks.vue";

describe("Header", () => {
  test("Título correto", () => {
    const wrapper = mount(Header);
    const title = wrapper.find('h1');

    expect(title.text()).toBe("Encurtador de URLs");

  });
  test("Lema correto", () => {
      const wrapper = mount(Header);
      const lema = wrapper.find('p');

      expect(lema.text()).toBe("Ninguém gosta de links enormes e complexos, mantenha-os simples conosco!");
  });
  test("Links corretos", () => {
      const wrapper = mount(HeaderLinks);

      const link_single = wrapper.findAll("li");
      expect(link_single.at(0).text()).toBe("Home");
      expect(link_single.at(1).text()).toBe("Top 100");
  })
})
