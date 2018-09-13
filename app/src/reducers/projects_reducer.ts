import { portfolio, RootAction } from '../actions';
import { getType } from 'typesafe-actions';
import { Projects } from '../proto/portfolio_pb';

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
    case getType(portfolio.addProjects):
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
