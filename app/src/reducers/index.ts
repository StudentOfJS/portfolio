import { combineReducers } from 'redux';

import cvReducer, { CVState } from './cv_reducer';
import projectsReducer, { ProjectState } from './projects_reducer';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  cv: CVState;
  projects: ProjectState;
}

export default combineReducers<RootState>({
  cv: cvReducer,
  projects: projectsReducer
});
