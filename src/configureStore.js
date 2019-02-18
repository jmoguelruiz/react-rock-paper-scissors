import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './pages/main/reducer';
import createHistory from "history/createBrowserHistory";
import thunk from 'redux-thunk';

/** Socket */
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

export const history = createHistory();

export default function configureStore(preloadedState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        socketIoMiddleware
      ),
    ),
  )

  if (module.hot) {
    module.hot.accept('./pages/main/reducer', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}