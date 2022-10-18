import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderComponent from "../HeaderComponent.vue";

describe("HeaderComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(HeaderComponent, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
