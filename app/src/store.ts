import { applyMiddleware, createStore, combineReducers } from 'redux';
import { newGrpcMiddleware } from './middleware/grpc';
import cvReducer, { CVState } from './reducers/cv_reducer';
import form_reducer, { FormState } from './reducers/form_reducer';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  cv: CVState;
  form: FormState;
}

const reducers = combineReducers<RootState>({
  cv: cvReducer,
  form: form_reducer,
});

export default createStore(
  reducers,
  applyMiddleware(
    newGrpcMiddleware(),
  )
);
