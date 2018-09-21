import { Action } from 'redux';
import {
  GetCVRequest,
  GetCVResponse,
  CV,
} from '../proto/portfolio_pb';
import { GrpcAction, grpcRequest } from '../middleware/grpc';
import { Code, Metadata } from 'grpc-web-client';
import { PortfolioService } from '../proto/portfolio_pb_service';

export const ADD_CV = 'ADD_CV';

export const CV_INIT = 'CV_INIT';

type AddCV = {
  type: typeof ADD_CV,
  payload: CV,
};

export const addCv = (cv: CV) => {
  return ({ type: ADD_CV, payload: cv });
};

type ListCVInit = {
  type: typeof CV_INIT
};
export const listCVInit = () => ({ type: CV_INIT });

export const listCV = () => {
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
      const cv = message.getCv();
      if (cv) {
        return addCv(cv);
      }
      return;
    }
  });
};

export type PortfolioActionTypes =
  | ListCVInit
  | AddCV
  | GrpcAction<GetCVRequest, GetCVResponse>;
