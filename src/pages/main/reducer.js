import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import game from '../game';
import login from '../login';
import register from '../register';

export default (history) => {
    return combineReducers({
        router: connectRouter(history),
        [game.NAME]: game.reducer,
        [login.NAME]: login.reducer,
        [register.NAME]: register.reducer
    });
}
