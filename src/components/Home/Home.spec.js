import { mount } from "@vue/test-utils";
import Home from "./Home.vue";


describe("Home", () => {
  it("renders", () => {
    const wrapper = mount(Home);
    expect(wrapper.exists()).toBe(true);
  });
});
