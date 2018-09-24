import { Action } from 'redux';
import {
  GetCVRequest,
  GetCVResponse,
  CV,
  ContactRequest,
  ContactResponse,
  ContactForm,
} from '../proto/portfolio_pb';
import { GrpcAction, grpcRequest } from '../middleware/grpc';
import { Code, Metadata } from 'grpc-web-client';
import { PortfolioService } from '../proto/portfolio_pb_service';
export const ADD_CV = 'ADD_CV';
export const CV_INIT = 'CV_INIT';
export const CONFIRM_FORM = 'CONFIRM_FORM';
export const FORM_INIT = 'FORM_INIT';

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

type FormInit = {
  type: typeof FORM_INIT
};
export const formInit = () => ({ type: FORM_INIT });

type ConfirmForm = {
  payload: boolean;
  type: typeof CONFIRM_FORM;
};
export const confirmForm = (confirmed: boolean) => ({ type: CONFIRM_FORM, payload: confirmed });

export const submitForm = (form: ContactForm) => {
  const contactRequest = new ContactRequest();
  contactRequest.setForm(form);
  return grpcRequest<ContactRequest, ContactResponse>({
    request: contactRequest,
    onStart: () => formInit(),
    onEnd: (
      code: Code,
      message: string | undefined,
      trailers: Metadata
    ): Action | void => {
      console.log(code, message, trailers);
      return;
    },
    host: 'http://localhost:8900',
    methodDescriptor: PortfolioService.Contact,
    onMessage: message => {
      const c = message.getFormaccepted();
      if (c) {
        return confirmForm(c.toObject().confirmed);
      }
      return;
    }
  });
};

export type PortfolioActionTypes =
  | ConfirmForm
  | FormInit
  | ListCVInit
  | AddCV
  | GrpcAction<ContactRequest, ContactResponse>
  | GrpcAction<GetCVRequest, GetCVResponse>;
