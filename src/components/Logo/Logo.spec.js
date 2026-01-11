import { mount } from "@vue/test-utils";
import Logo from "./Logo.vue";


describe("Logo", () => {
  it("renders", () => {
    const wrapper = mount(Logo);
    expect(wrapper.exists()).toBe(true);
  });
});
