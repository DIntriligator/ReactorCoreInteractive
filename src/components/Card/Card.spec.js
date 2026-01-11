import { mount } from "@vue/test-utils";
import Card from "./Card.vue";


describe("Card", () => {
  it("renders", () => {
    const wrapper = mount(Card);
    expect(wrapper.exists()).toBe(true);
  });
});
