import { Action } from 'redux';
import {
  Bio,
  Education,
  Experience,
  GetBioRequest,
  GetBioResponse,
  GetCVRequest,
  GetCVResponse,
  ListProjectsResponse,
  ListProjectsRequest,
  Projects,
  Skills,
} from '../proto/portfolio_pb';
import { GrpcAction, grpcRequest } from '../middleware/grpc';
import { Code, Metadata } from 'grpc-web-client';
import { PortfolioService } from '../proto/portfolio_pb_service';

export const ADD_SKILLS = 'ADD_SKILLS';
export const ADD_PROJECTS = 'ADD_PROJECTS';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const ADD_BIO = 'ADD_BIO';

export const CV_INIT = 'CV_INIT';
export const BIO_INIT = 'BIO_INIT';
export const PROJECT_INIT = 'PROJECT_INIT';

type AddSkills = {
  type: typeof ADD_SKILLS,
  payload: Skills,
};
export const addSkills = (skills: Skills) => ({ type: ADD_SKILLS, payload: skills });

type AddExperience = {
  type: typeof ADD_EXPERIENCE,
  payload: Experience,
};
export const addExperience = (exp: Experience) => ({ type: ADD_EXPERIENCE, payload: exp });

type AddEducation = {
  type: typeof ADD_EDUCATION,
  payload: Education,
};
export const addEducation = (edu: Education) => ({ type: ADD_EDUCATION, payload: edu });

type AddBio = {
  type: typeof ADD_BIO,
  payload: Bio,
};
export const addBio = (bio: Bio) => ({ type: ADD_BIO, payload: bio });

type AddProjects = {
  type: typeof ADD_PROJECTS,
  payload: Projects,
};
export const addProjects = (projects: Projects) => ({ type: ADD_PROJECTS, payload: projects });

type ListProjectsInit = {
  type: typeof PROJECT_INIT,
};
export const listProjectsInit = (): ListProjectsInit => ({ type: PROJECT_INIT });

export const initializeProjects = () => {
  return grpcRequest<ListProjectsRequest, ListProjectsResponse>({
    request: new ListProjectsRequest(),
    onStart: () => listProjectsInit(),
    onEnd: (
      code: Code,
      message: string | undefined,
      trailers: Metadata
    ): Action | void => {
      console.log(code, message, trailers);
      return;
    },
    host: 'http://localhost:8900',
    methodDescriptor: PortfolioService.ListProjects,
    onMessage: message => {
      const proj = message.getProjects();
      if (proj) {
        return addProjects(proj);
      }
      return;
    }
  });
};

type ListBioInit = {
  type: typeof BIO_INIT,
};
export const listBioInit = (): ListBioInit => ({ type: BIO_INIT });

export const initializeBio = () => {
  return grpcRequest<GetBioRequest, GetBioResponse>({
    request: new GetBioRequest(),
    onStart: () => listBioInit(),
    onEnd: (
      code: Code,
      message: string | undefined,
      trailers: Metadata
    ): Action | void => {
      console.log(code, message, trailers);
      return;
    },
    host: 'http://localhost:8900',
    methodDescriptor: PortfolioService.GetBio,
    onMessage: message => {
      const bio = message.getBio();
      if (bio) {
        addBio(bio);
      }
      return;
    }
  });
};

type ListCVInit = {
  type: typeof CV_INIT,
};
export const listCVInit = (): ListCVInit => ({ type: CV_INIT });

export const initializeCV = () => {
  return grpcRequest<GetCVRequest, GetCVResponse>({
    request: new GetCVRequest(),
    onStart: () => listCVInit(),
    onEnd: (
      code: Code,
      message: string | undefined,
      trailers: Metadata
    ): Action | void => {
      console.log(code, message, trailers);
      return;
    },
    host: 'http://localhost:8900',
    methodDescriptor: PortfolioService.GetCV,
    onMessage: message => {
      const skills = message.getSkills();
      const jobs = message.getJobs();
      const edu = message.getCourses();
      if (skills) {
        addSkills(skills);
      }
      if (jobs) {
        addExperience(jobs);
      }
      if (edu) {
        addEducation(edu);
      }
      return;
    }
  });
};

export type PortfolioActionTypes =
  | AddBio
  | AddExperience
  | AddEducation
  | AddSkills
  | ListProjectsInit
  | ListBioInit
  | ListCVInit
  | AddProjects
  | GrpcAction<ListProjectsRequest, ListProjectsResponse>
  | GrpcAction<GetBioRequest, GetBioResponse>
  | GrpcAction<GetCVRequest, GetCVResponse>;
