import { RootAction } from '../actions';
import { Bio, Education, Experience, Skills } from '../proto/portfolio_pb';
import { ADD_BIO, ADD_EDUCATION, ADD_EXPERIENCE, ADD_SKILLS } from '../actions/portfolioActions';

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
    case ADD_BIO:
      const bio = action && action.payload.toObject();
      return { ...state, bio };

    case ADD_EDUCATION:
      const education: Education.AsObject = action.payload.toObject();
      return { ...state, education };

    case ADD_SKILLS:
      const skills: Skills.AsObject = action.payload.toObject();
      return { ...state, skills };

    case ADD_EXPERIENCE:
      const experience: Experience.AsObject = action.payload.toObject();
      return { ...state, experience };
    default:
      return state;
  }
}
