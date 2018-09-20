import { combineReducers } from 'redux';

import cvReducer, { CVState } from './cv_reducer';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  cv: CVState;
}

export default combineReducers<RootState>({
  cv: cvReducer,
});
