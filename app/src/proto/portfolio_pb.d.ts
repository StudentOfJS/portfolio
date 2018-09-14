// package: portfolio
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
  getInstitution(): string;
  setInstitution(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDates(): string;
  setDates(value: string): void;

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
    institution: string,
    description: string,
    dates: string,
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
  getCategory(): string;
  setCategory(value: string): void;

  getType(): string;
  setType(value: string): void;

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
    category: string,
    type: string,
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

