import { combineReducers } from 'redux';

import cvReducer from './cv_reducer';
import projectsReducer from './projects_reducer';
import { RootState } from '../store';

export default combineReducers<RootState>({
  cv: cvReducer,
  projects: projectsReducer
});
