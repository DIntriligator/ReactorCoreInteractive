import { mount } from "@vue/test-utils";
import MediaAssets from "./MediaAssets.vue";

describe("MediaAssets", () => {
  it("renders", () => {
    const wrapper = mount(MediaAssets);
    expect(wrapper.exists()).toBe(true);
  });
});
