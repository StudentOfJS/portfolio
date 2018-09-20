import { RootAction } from '../actions';
import { Bio, Education, Experience, Projects, Skills } from '../proto/portfolio_pb';
import { ADD_CV } from '../actions/portfolioActions';

export type CVState = {
  readonly bio: Bio.AsObject | null;
  readonly education: Education.AsObject | null;
  readonly experience: Experience.AsObject | null;
  readonly projects: Projects.AsObject | null;
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
  projects: {
    projectsList: []
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
    case ADD_CV:
      const bio = action.payload.getBio();
      const projects = action.payload.getProjects();
      const education = action.payload.getCourses();
      const experience = action.payload.getJobs();
      const skills = action.payload.getSkills();
      const newState: CVState = {
        bio: bio && bio.toObject() || null,
        education: education && education.toObject() || null,
        experience: experience && experience.toObject() || null,
        projects: projects && projects.toObject() || null,
        skills: skills && skills.toObject() || null,
      };
      return newState;
    default:
      return state;
  }
}
