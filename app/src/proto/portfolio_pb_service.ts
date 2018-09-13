// package: portfolio
// file: proto/portfolio.proto

import * as proto_portfolio_pb from "../proto/portfolio_pb";
export class PortfolioService {
  static serviceName = "portfolio.PortfolioService";
}
export namespace PortfolioService {
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
