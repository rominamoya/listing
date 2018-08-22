import { mount } from "enzyme";
import DetailsComponent from "../Detail/DetailsComponent";
import { projectDetailsMock }  from "../__mocks__/projectListMocks";
import React from "react";

const props = {
  projectDetails: projectDetailsMock
};

describe("DetailsComponent", () => {
	it("should render correctly", () => {
	    const wrapper = mount(<DetailsComponent projectDetails= {projectDetailsMock} />);
	    
	    expect(wrapper.find("h2").html()).toContain("php-webdriver");
	    expect(wrapper.find("h5").html()).toContain("A php client for webdriver.");
		expect(wrapper.find("Image").at(0).props().src).toEqual("https://avatars2.githubusercontent.com/u/117530?v=4")
		expect(wrapper.find("ListHeader").at(1).html()).toContain("jdelong")
	});
});

