import { createStore, compose, applyMiddleware } from 'redux';
import createRootReducer from './pages/main/reducer';

export default function configureStore(preloadedState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
      ),
    ),
  )

  if (module.hot) {
    module.hot.accept('./pages/main/reducer', () => {
      store.replaceReducer(createRootReducer);
    });
  }

  return store;
}