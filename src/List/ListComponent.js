import { List, Label, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";

const ListComponent = props => {
  const { projectList } = props;

  return (
    <List divided relaxed>
      {projectList &&
        projectList.map((projectItem, index) => {
          return (
            <List.Item key={index}>
              <List.Content
                onClick={() => props.fetchProjectDetails(projectItem)}
              >
                 <Label as='a'>
                  <Icon name='eye' />
                  {projectItem.watchers_count}
                 <Label.Detail> {projectItem.name}</Label.Detail>
                </Label>
              </List.Content>
            </List.Item>
          );
        })}
    </List>
  );
};

ListComponent.propTypes ={
  projectList: PropTypes.array
}

export default ListComponent;
