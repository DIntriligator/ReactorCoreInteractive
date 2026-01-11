import { mount } from "@vue/test-utils";
import Trailer from "./Trailer.vue";


describe("Trailer", () => {
  it("renders", () => {
    const wrapper = mount(Trailer);
    expect(wrapper.exists()).toBe(true);
  });
});
