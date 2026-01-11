import { mount } from "@vue/test-utils";
import GameListing from "./GameListing.vue";


describe("GameListing", () => {
  it("renders", () => {
    const wrapper = mount(GameListing);
    expect(wrapper.exists()).toBe(true);
  });
});
