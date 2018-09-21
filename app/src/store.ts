import { applyMiddleware, createStore, combineReducers } from 'redux';
import { newGrpcMiddleware } from './middleware/grpc';
import cvReducer, { CVState } from './reducers/cv_reducer';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  cv: CVState;
}

const reducers = combineReducers<RootState>({
  cv: cvReducer
});

export default createStore(
  reducers,
  applyMiddleware(
    newGrpcMiddleware(),
  )
);
