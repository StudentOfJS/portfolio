import { applyMiddleware, createStore } from 'redux';
import { newGrpcMiddleware } from './middleware/grpc';
import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(
    newGrpcMiddleware(),
  )
);
