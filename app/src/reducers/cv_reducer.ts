import { PortfolioActionTypes } from '../actions/portfolioActions';
import { Bio, Education, Experience, Projects, Skills } from '../proto/portfolio_pb';
import { ADD_CV, CV_INIT } from '../actions/portfolioActions';

export type CVState = {
  readonly bio: Bio.AsObject | null;
  readonly education: Education.AsObject | null;
  readonly experience: Experience.AsObject | null;
  readonly loading: boolean;
  readonly projects: Projects.AsObject | null;
  readonly skills: Skills.AsObject | null;
};

const initialState = {
  loading: false,
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
  projects: {
    projectsList: []
  },
  skills: {
    skillsList: []
  },
};

export default function (
  state: CVState = initialState,
  action: PortfolioActionTypes
) {
  switch (action.type) {
    case CV_INIT:
      return { ...state, loading: true };
    case ADD_CV:
      const b = action.payload.getBio();
      const bio = {
        description: '',
        title: '',
      };
      if (b) {
        bio.description = b.getDescription();
        bio.title = b.getTitle();
      }
      const projects = action.payload.getProjects();
      const education = action.payload.getCourses();
      const experience = action.payload.getJobs();
      const skills = action.payload.getSkills();
      const newState: CVState = {
        loading: false,
        bio,
        education: !!education && education.toObject() || null,
        experience: !!experience && experience.toObject() || null,
        projects: !!projects && projects.toObject() || null,
        skills: !!skills && skills.toObject() || null,
      };
      return newState;
    default:
      return state;
  }
}
