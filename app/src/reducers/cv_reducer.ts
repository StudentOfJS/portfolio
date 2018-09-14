import { portfolio, RootAction } from '../actions';
import { getType } from 'typesafe-actions';
import { Bio, Education, Experience, Skills } from '../proto/portfolio_pb';

export type CVState = {
  readonly bio: Bio.AsObject | null;
  readonly education: Education.AsObject | null;
  readonly experience: Experience.AsObject | null;
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
  experience: {
    jobsList: []
  },
  skills: {
    skillsList: []
  },
};

export default function (
  state: CVState = initialState,
  action: RootAction
): CVState {
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

    case getType(portfolio.addExperience):
      const experience: Experience.AsObject = action.payload.toObject();
      return { ...state, experience };
    default:
      return state;
  }
}
