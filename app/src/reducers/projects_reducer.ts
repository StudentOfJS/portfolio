import { RootAction } from '../actions';
import { Projects } from '../proto/portfolio_pb';
import { ADD_PROJECTS } from '../actions/portfolioActions';

export type ProjectState = {
  readonly projects: Projects.AsObject | null;
  readonly error: Error | null;
  readonly loading: boolean;
  readonly selected: Projects.AsObject | null;
};

const initialState = {
  projects: {
    projectsList: []
  },
  error: null,
  loading: false,
  selected: null
};

export default function (
  state: ProjectState = initialState,
  action: RootAction
): ProjectState {
  switch (action.type) {
    case ADD_PROJECTS:
      return {
        ...state,
        loading: false,
        projects: {
          projectsList: action.payload.toArray()
        },
        selected: null
      };

    default:
      return state;
  }
}
