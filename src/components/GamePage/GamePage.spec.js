import { mount } from "@vue/test-utils";
import GamePage from "./GamePage.vue";


describe("GamePage", () => {
  it("renders", () => {
    const wrapper = mount(GamePage);
    expect(wrapper.exists()).toBe(true);
  });
});
