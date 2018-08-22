import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_DETAILS_SUCCESS,
  SORT_FETCHED_PROJECTS_BY
} from "../constants";

const defaultState = {
  projectList: [],
  projectDetails: null
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectList: action.payload
      };

    case FETCH_PROJECTS_DETAILS_SUCCESS:
      return {
        ...state,
        projectDetails: action.payload
      };

    case SORT_FETCHED_PROJECTS_BY: {
      switch (action.attribute) {
        case "Ascending":
          const projectListSortedAsc = state.projectList.sort(function(a, b) {
            return a.watchers - b.watchers;
          });
          return {
            ...state,
            projectList: projectListSortedAsc
          };
        case "Descending":
          const projectListSortedDesc = state.projectList
            .slice()
            .sort(function(a, b) {
              return b.watchers - a.watchers;
            });
          return {
            ...state,
            projectList: projectListSortedDesc
          };

        default:
          return state;
      }
    }

    default:
      return state;
  }
};
