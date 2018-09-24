import { PortfolioActionTypes, FORM_INIT, CONFIRM_FORM } from '../actions/portfolioActions';

export type FormState = {
  readonly form_confirmed: boolean;
  readonly loading: boolean;
};

const initialState = {
  form_confirmed: false,
  loading: false,
};

export default function (
  state: FormState = initialState,
  action: PortfolioActionTypes
) {
  switch (action.type) {
    case FORM_INIT:
      return ({ ...state, loading: true });
    case CONFIRM_FORM:
      return ({ form_confirmed: action.payload, loading: false });
    default:
      return state;
  }
}
