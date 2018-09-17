// package: proto
// file: proto/portfolio.proto

import * as jspb from "google-protobuf";

export class Bio extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bio.AsObject;
  static toObject(includeInstance: boolean, msg: Bio): Bio.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bio;
  static deserializeBinaryFromReader(message: Bio, reader: jspb.BinaryReader): Bio;
}

export namespace Bio {
  export type AsObject = {
    title: string,
    description: string,
  }
}

export class Course extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getInstitution(): string;
  setInstitution(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDates(): string;
  setDates(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Course.AsObject;
  static toObject(includeInstance: boolean, msg: Course): Course.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Course, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Course;
  static deserializeBinaryFromReader(message: Course, reader: jspb.BinaryReader): Course;
}

export namespace Course {
  export type AsObject = {
    id: number,
    institution: string,
    description: string,
    dates: string,
    name: string,
  }
}

export class Education extends jspb.Message {
  clearCoursesList(): void;
  getCoursesList(): Array<Course>;
  setCoursesList(value: Array<Course>): void;
  addCourses(value?: Course, index?: number): Course;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Education.AsObject;
  static toObject(includeInstance: boolean, msg: Education): Education.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Education, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Education;
  static deserializeBinaryFromReader(message: Education, reader: jspb.BinaryReader): Education;
}

export namespace Education {
  export type AsObject = {
    coursesList: Array<Course.AsObject>,
  }
}

export class Skill extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getRating(): number;
  setRating(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    id: number,
    name: string,
    rating: number,
    description: string,
  }
}

export class Skills extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skills.AsObject;
  static toObject(includeInstance: boolean, msg: Skills): Skills.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skills;
  static deserializeBinaryFromReader(message: Skills, reader: jspb.BinaryReader): Skills;
}

export namespace Skills {
  export type AsObject = {
    skillsList: Array<Skill.AsObject>,
  }
}

export class Project extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getMeta(): string;
  setMeta(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRepo(): string;
  setRepo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: number,
    title: string,
    meta: string,
    description: string,
    repo: string,
  }
}

export class Projects extends jspb.Message {
  clearProjectsList(): void;
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): void;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Projects.AsObject;
  static toObject(includeInstance: boolean, msg: Projects): Projects.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Projects, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Projects;
  static deserializeBinaryFromReader(message: Projects, reader: jspb.BinaryReader): Projects;
}

export namespace Projects {
  export type AsObject = {
    projectsList: Array<Project.AsObject>,
  }
}

export class Job extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCompany(): string;
  setCompany(value: string): void;

  getJobTitle(): string;
  setJobTitle(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getDates(): string;
  setDates(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLogoUrl(): string;
  setLogoUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    id: number,
    company: string,
    jobTitle: string,
    location: string,
    dates: string,
    description: string,
    logoUrl: string,
  }
}

export class Experience extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): void;
  addJobs(value?: Job, index?: number): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Experience.AsObject;
  static toObject(includeInstance: boolean, msg: Experience): Experience.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Experience, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Experience;
  static deserializeBinaryFromReader(message: Experience, reader: jspb.BinaryReader): Experience;
}

export namespace Experience {
  export type AsObject = {
    jobsList: Array<Job.AsObject>,
  }
}

export class AddBioResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddBioResponse): AddBioResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBioResponse;
  static deserializeBinaryFromReader(message: AddBioResponse, reader: jspb.BinaryReader): AddBioResponse;
}

export namespace AddBioResponse {
  export type AsObject = {
  }
}

export class AddBioRequest extends jspb.Message {
  hasBio(): boolean;
  clearBio(): void;
  getBio(): Bio | undefined;
  setBio(value?: Bio): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBioRequest): AddBioRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBioRequest;
  static deserializeBinaryFromReader(message: AddBioRequest, reader: jspb.BinaryReader): AddBioRequest;
}

export namespace AddBioRequest {
  export type AsObject = {
    bio?: Bio.AsObject,
  }
}

export class AddCourseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCourseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddCourseResponse): AddCourseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCourseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCourseResponse;
  static deserializeBinaryFromReader(message: AddCourseResponse, reader: jspb.BinaryReader): AddCourseResponse;
}

export namespace AddCourseResponse {
  export type AsObject = {
  }
}

export class AddCourseRequest extends jspb.Message {
  hasCourse(): boolean;
  clearCourse(): void;
  getCourse(): Course | undefined;
  setCourse(value?: Course): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCourseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCourseRequest): AddCourseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCourseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCourseRequest;
  static deserializeBinaryFromReader(message: AddCourseRequest, reader: jspb.BinaryReader): AddCourseRequest;
}

export namespace AddCourseRequest {
  export type AsObject = {
    course?: Course.AsObject,
  }
}

export class AddJobResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddJobResponse): AddJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddJobResponse;
  static deserializeBinaryFromReader(message: AddJobResponse, reader: jspb.BinaryReader): AddJobResponse;
}

export namespace AddJobResponse {
  export type AsObject = {
  }
}

export class AddJobRequest extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddJobRequest): AddJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddJobRequest;
  static deserializeBinaryFromReader(message: AddJobRequest, reader: jspb.BinaryReader): AddJobRequest;
}

export namespace AddJobRequest {
  export type AsObject = {
    job?: Job.AsObject,
  }
}

export class AddProjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddProjectResponse): AddProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProjectResponse;
  static deserializeBinaryFromReader(message: AddProjectResponse, reader: jspb.BinaryReader): AddProjectResponse;
}

export namespace AddProjectResponse {
  export type AsObject = {
  }
}

export class AddProjectRequest extends jspb.Message {
  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddProjectRequest): AddProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProjectRequest;
  static deserializeBinaryFromReader(message: AddProjectRequest, reader: jspb.BinaryReader): AddProjectRequest;
}

export namespace AddProjectRequest {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class AddSkillResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSkillResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSkillResponse): AddSkillResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSkillResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSkillResponse;
  static deserializeBinaryFromReader(message: AddSkillResponse, reader: jspb.BinaryReader): AddSkillResponse;
}

export namespace AddSkillResponse {
  export type AsObject = {
  }
}

export class AddSkillRequest extends jspb.Message {
  hasSkill(): boolean;
  clearSkill(): void;
  getSkill(): Skill | undefined;
  setSkill(value?: Skill): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSkillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSkillRequest): AddSkillRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSkillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSkillRequest;
  static deserializeBinaryFromReader(message: AddSkillRequest, reader: jspb.BinaryReader): AddSkillRequest;
}

export namespace AddSkillRequest {
  export type AsObject = {
    skill?: Skill.AsObject,
  }
}

export class GetBioResponse extends jspb.Message {
  hasBio(): boolean;
  clearBio(): void;
  getBio(): Bio | undefined;
  setBio(value?: Bio): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBioResponse): GetBioResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBioResponse;
  static deserializeBinaryFromReader(message: GetBioResponse, reader: jspb.BinaryReader): GetBioResponse;
}

export namespace GetBioResponse {
  export type AsObject = {
    bio?: Bio.AsObject,
  }
}

export class GetBioRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBioRequest): GetBioRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBioRequest;
  static deserializeBinaryFromReader(message: GetBioRequest, reader: jspb.BinaryReader): GetBioRequest;
}

export namespace GetBioRequest {
  export type AsObject = {
  }
}

export class GetCVResponse extends jspb.Message {
  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): Skills | undefined;
  setSkills(value?: Skills): void;

  hasJobs(): boolean;
  clearJobs(): void;
  getJobs(): Experience | undefined;
  setJobs(value?: Experience): void;

  hasCourses(): boolean;
  clearCourses(): void;
  getCourses(): Education | undefined;
  setCourses(value?: Education): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCVResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCVResponse): GetCVResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCVResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCVResponse;
  static deserializeBinaryFromReader(message: GetCVResponse, reader: jspb.BinaryReader): GetCVResponse;
}

export namespace GetCVResponse {
  export type AsObject = {
    skills?: Skills.AsObject,
    jobs?: Experience.AsObject,
    courses?: Education.AsObject,
  }
}

export class GetCVRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCVRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCVRequest): GetCVRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCVRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCVRequest;
  static deserializeBinaryFromReader(message: GetCVRequest, reader: jspb.BinaryReader): GetCVRequest;
}

export namespace GetCVRequest {
  export type AsObject = {
  }
}

export class ListProjectsResponse extends jspb.Message {
  hasProjects(): boolean;
  clearProjects(): void;
  getProjects(): Projects | undefined;
  setProjects(value?: Projects): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsResponse): ListProjectsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsResponse;
  static deserializeBinaryFromReader(message: ListProjectsResponse, reader: jspb.BinaryReader): ListProjectsResponse;
}

export namespace ListProjectsResponse {
  export type AsObject = {
    projects?: Projects.AsObject,
  }
}

export class ListProjectsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsRequest): ListProjectsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsRequest;
  static deserializeBinaryFromReader(message: ListProjectsRequest, reader: jspb.BinaryReader): ListProjectsRequest;
}

export namespace ListProjectsRequest {
  export type AsObject = {
  }
}

