import { mount } from "@vue/test-utils";
import RcButton from "./RcButton.vue";


describe("RcButton", () => {
  it("renders", () => {
    const wrapper = mount(RcButton);
    expect(wrapper.exists()).toBe(true);
  });
});
