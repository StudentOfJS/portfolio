import { portfolio, RootAction } from '../actions';
import { getType } from 'typesafe-actions';
import { Project } from '../proto/portfolio_pb';

export type ProjectState = {
  readonly projects: { [id: number]: Project.AsObject };
  readonly error: Error | null;
  readonly loading: boolean;
  readonly selected: Project.AsObject | null;
};

const initialState = {
  bio: {
    description: '',
    title: '',
  },
  projects: {},
  error: null,
  loading: false,
  selected: null
};

export default function (
  state: ProjectState = initialState,
  action: RootAction
): ProjectState {
  switch (action.type) {
    case getType(portfolio.addBio):
      const Bio = Bio.AsObject = action.payload.toObject();
      return { ...state, bio: action.payload };

    case ADD_Project:
      const Project: Project.AsObject = action.payload.toObject();
      const selected = state.selected !== null ? state.selected : story;
      if (story.id) {
        return {
          ...state,
          loading: false,
          stories: { ...state.stories, [story.id]: story },
          selected
        };
      }
      return state;

    case SELECT_STORY:
      return { ...state, selected: state.stories[action.payload] };

    default:
      return state;
  }
}
