// package: proto
// file: proto/portfolio.proto

import * as proto_portfolio_pb from "../proto/portfolio_pb";
export class PortfolioService {
  static serviceName = "proto.PortfolioService";
}
export namespace PortfolioService {
  export class AddBio {
    static readonly methodName = "AddBio";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.AddBioRequest;
    static readonly responseType = proto_portfolio_pb.AddBioResponse;
  }
  export class AddCourse {
    static readonly methodName = "AddCourse";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.AddCourseRequest;
    static readonly responseType = proto_portfolio_pb.AddCourseResponse;
  }
  export class AddJob {
    static readonly methodName = "AddJob";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.AddJobRequest;
    static readonly responseType = proto_portfolio_pb.AddJobResponse;
  }
  export class AddProject {
    static readonly methodName = "AddProject";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.AddProjectRequest;
    static readonly responseType = proto_portfolio_pb.AddProjectResponse;
  }
  export class AddSkill {
    static readonly methodName = "AddSkill";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.AddSkillRequest;
    static readonly responseType = proto_portfolio_pb.AddSkillResponse;
  }
  export class GetBio {
    static readonly methodName = "GetBio";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.GetBioRequest;
    static readonly responseType = proto_portfolio_pb.GetBioResponse;
  }
  export class GetCV {
    static readonly methodName = "GetCV";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.GetCVRequest;
    static readonly responseType = proto_portfolio_pb.GetCVResponse;
  }
  export class ListProjects {
    static readonly methodName = "ListProjects";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.ListProjectsRequest;
    static readonly responseType = proto_portfolio_pb.ListProjectsResponse;
  }
}
