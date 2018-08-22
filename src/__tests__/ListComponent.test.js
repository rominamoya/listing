import { mount } from "enzyme";
import ListComponent from "../List/ListComponent";
import {projectLiskMock}  from "../__mocks__/projectListMocks";
import React from "react";

const props = {
  projectList: projectLiskMock
};

describe("ListComponent", () => {
  it("should render correctly", () => {
    const wrapper = mount(<ListComponent {...props} />);
    expect(wrapper.find("LabelDetail").html()).toContain("codemod");
    expect(wrapper.find("Label").html()).toContain("2425");
  });
});
