import { Action } from 'redux';
import { action } from 'typesafe-actions';
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

export const GET_SKILLS = 'GET_SKILLS';
export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_EDUCATION = 'GET_EDUCATION';
export const GET_EXPERIENCE = 'GET_EXPERIENCE';
export const GET_BIO = 'GET_BIO';

export const CV_INIT = 'CV_INIT';
export const BIO_INIT = 'BIO_INIT';
export const PROJECT_INIT = 'PROJECT_INIT';

export const addBio = (bio: Bio) => action(ADD_BIO, bio);
export const addEducation = (edu: Education) => action(ADD_EDUCATION, edu);
export const addSkills = (skills: Skills) => action(ADD_SKILLS, skills);
export const addExperience = (exp: Experience) => action(ADD_EXPERIENCE, exp);
export const addProjects = (proj: Projects) => action(ADD_PROJECTS, proj);

export const getBio = () => action(GET_BIO);
export const getEducation = () => action(GET_EDUCATION);
export const getSkills = () => action(GET_SKILLS);
export const getExperience = () => action(GET_EXPERIENCE);
export const getProjects = () => action(GET_PROJECTS);
export const BIOInit = () => action(BIO_INIT);
export const CVInit = () => action(CV_INIT);
export const ProjectsInit = () => action(PROJECT_INIT);

export const initializeProjects = () => {
  return grpcRequest<ListProjectsRequest, ListProjectsResponse>({
    request: new ListProjectsRequest(),
    onStart: () => ProjectsInit(),
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

export const initializeBio = () => {
  return grpcRequest<GetBioRequest, GetBioResponse>({
    request: new GetBioRequest(),
    onStart: () => BIOInit(),
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

export const initializeCV = () => {
  return grpcRequest<GetCVRequest, GetCVResponse>({
    request: new GetCVRequest(),
    onStart: () => CVInit(),
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
  | GrpcAction<ListProjectsRequest, ListProjectsResponse>
  | GrpcAction<GetBioRequest, GetBioResponse>
  | GrpcAction<GetCVRequest, GetCVResponse>;
