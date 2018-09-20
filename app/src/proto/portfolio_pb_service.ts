// package: proto
// file: proto/portfolio.proto

import * as proto_portfolio_pb from "../proto/portfolio_pb";
export class PortfolioService {
  static serviceName = "proto.PortfolioService";
}
export namespace PortfolioService {
  export class GetCV {
    static readonly methodName = "GetCV";
    static readonly service = PortfolioService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_portfolio_pb.GetCVRequest;
    static readonly responseType = proto_portfolio_pb.GetCVResponse;
  }
}
