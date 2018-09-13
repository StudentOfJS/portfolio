import { portfolio, RootAction } from '../actions';
import { getType } from 'typesafe-actions';
import { Bio, Education, Skills } from '../proto/portfolio_pb';

export type ProjectState = {
  readonly bio: Bio.AsObject | null;
  readonly education: Education.AsObject | null;
  readonly skills: Skills.AsObject | null;
};

const initialState = {
  bio: {
    description: '',
    title: '',
  },
  education: {
    coursesList: []
  },
  skills: {
    skillsList: []
  },
};

export default function (
  state: ProjectState = initialState,
  action: RootAction
): ProjectState {
  switch (action.type) {
    case getType(portfolio.addBio):
      const bio = action.payload.toObject();
      return { ...state, bio };

    case getType(portfolio.addEducation):
      const education: Education.AsObject = action.payload.toObject();
      return { ...state, education };

    case getType(portfolio.addSkills):
      const skills: Skills.AsObject = action.payload.toObject();
      return { ...state, skills };
    default:
      return state;
  }
}
