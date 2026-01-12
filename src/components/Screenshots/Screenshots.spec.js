import { mount } from "@vue/test-utils";
import Screenshots from "./Screenshots.vue";


describe("Screenshots", () => {
  it("renders", () => {
    const wrapper = mount(Screenshots);
    expect(wrapper.exists()).toBe(true);
  });
});
