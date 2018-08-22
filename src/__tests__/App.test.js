import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import App from '../App';
import { mount , shallow} from 'enzyme';
import { Provider } from 'react-redux';
import projectLiskMock from '../__mocks__/projectListMocks';
import Adapter from 'enzyme-adapter-react-16';

const fn = jest.fn();

const mockStore = configureMockStore();
const props = {
  projectList: fn,
  projectDetails: fn,
  sortFetchedProjectBy: fn
};

describe('App', () => {

  it('renders without crashing', () => {
    const store = mockStore({
      project: {
        projectList: projectLiskMock,
        projectDetails: null,
      },
    });
    const wrapper = mount(<Provider store={store}><App {...props}  /></Provider>);
    const app = wrapper.find("App");

    const fetchProjectDetailsSpy = jest.spyOn(app.props(), 'fetchProjectDetails');
    expect(app.props().projectList).toEqual(projectLiskMock);
    expect(app.props().projectDetails).toEqual(null);

    app.props().fetchProjectDetails("test");

    expect(fetchProjectDetailsSpy).toHaveBeenCalledWith("test");
  });
  it('should correctly set asc link active', () => {
    const store = mockStore({
      project: {
        projectList: projectLiskMock,
        projectDetails: null,
      },
    });
    const wrapper = mount(<Provider store={store}><App {...props}  /></Provider>);
    const app = wrapper.find("App");
    const ascMenuItem =app.find("MenuItem").at(0);

    ascMenuItem.simulate('click', { event: '' });

    expect(app.instance().state.activeItem).toEqual("Ascending");

    const descMenuItem = app.find("MenuItem").at(1);
    descMenuItem.simulate('click', { event: '' });

    expect(app.instance().state.activeItem).toEqual("Descending");
  })
});
