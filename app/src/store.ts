import { applyMiddleware, combineReducers, createStore } from 'redux';
import stories, { StoryState } from './reducers/projects_reducer';
import { newGrpcMiddleware } from './middleware/grpc';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  stories: StoryState;
}

const reducers = combineReducers<RootState>({
  stories,
});

export default createStore(
  reducers,
  applyMiddleware(
    newGrpcMiddleware(),
  )
);
