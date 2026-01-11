import { mount } from "@vue/test-utils";
import GameCard from "./GameCard.vue";


describe("GameCard", () => {
  it("renders", () => {
    const wrapper = mount(GameCard);
    expect(wrapper.exists()).toBe(true);
  });
});
