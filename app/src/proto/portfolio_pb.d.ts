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

export class CV extends jspb.Message {
  hasBio(): boolean;
  clearBio(): void;
  getBio(): Bio | undefined;
  setBio(value?: Bio): void;

  hasCourses(): boolean;
  clearCourses(): void;
  getCourses(): Education | undefined;
  setCourses(value?: Education): void;

  hasJobs(): boolean;
  clearJobs(): void;
  getJobs(): Experience | undefined;
  setJobs(value?: Experience): void;

  hasProjects(): boolean;
  clearProjects(): void;
  getProjects(): Projects | undefined;
  setProjects(value?: Projects): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): Skills | undefined;
  setSkills(value?: Skills): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CV.AsObject;
  static toObject(includeInstance: boolean, msg: CV): CV.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CV, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CV;
  static deserializeBinaryFromReader(message: CV, reader: jspb.BinaryReader): CV;
}

export namespace CV {
  export type AsObject = {
    bio?: Bio.AsObject,
    courses?: Education.AsObject,
    jobs?: Experience.AsObject,
    projects?: Projects.AsObject,
    skills?: Skills.AsObject,
  }
}

export class GetCVResponse extends jspb.Message {
  hasCv(): boolean;
  clearCv(): void;
  getCv(): CV | undefined;
  setCv(value?: CV): void;

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
    cv?: CV.AsObject,
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

