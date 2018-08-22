import { Container, Header, List, Image } from "semantic-ui-react";
import React from "react";
import PropTypes from "prop-types";

const DetailsComponent = props => {
  const { projectDetails } = props;
  if (!projectDetails) {
    return null;
  }

  return (
    <Container text fluid>
      <Header as='h2'>{projectDetails.name}</Header>
      <Header as='h5'>{projectDetails.description}</Header>
      <List divided verticalAlign="middle">
        {projectDetails.contributorList.map((contributor, index) => {
          return (
            <List.Item key={index}>
              <Image avatar src={contributor.avatar_url} />
              <List.Content>
                <List.Header as="a" target="_blank" href={contributor.html_url}>{contributor.login}</List.Header>
                {contributor.type}
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </Container>
  );
};

DetailsComponent.propTypes = {
  projectDetails: PropTypes.object
};

export default DetailsComponent;
