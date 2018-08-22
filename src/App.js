import { fetchProjectDetails,
  fetchProjects,
  sortFetchedProjectBy
} from "./actions/projectsAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Menu } from "semantic-ui-react";
import DetailsComponent from "./Detail/DetailsComponent";
import ListComponent from "./List/ListComponent";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount = () => {
    this.props.fetchProjects();
  };

  fetchProjectDetails = projectItem => {
    this.props.fetchProjectDetails(projectItem);
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.sortFetchedProjectBy(name);
  };

  render() {
    const { activeItem } = this.state;

    return (
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu fluid widths={2}>
                <Menu.Item
                  name="Ascending"
                  active={activeItem === "Ascending"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Descending"
                  active={activeItem === "Descending"}
                  onClick={this.handleItemClick}
                />
              </Menu>
              <ListComponent
                projectList={this.props.projectList}
                fetchProjectDetails={this.fetchProjectDetails}
              />
            </Grid.Column>
            <Grid.Column width={13}>
              <DetailsComponent projectDetails={this.props.projectDetails} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

const mapStateToProps = state => ({
  projectList: state.project.projectList,
  projectDetails: state.project.projectDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProjects: fetchProjects,
      fetchProjectDetails: fetchProjectDetails,
      sortFetchedProjectBy: sortFetchedProjectBy
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
