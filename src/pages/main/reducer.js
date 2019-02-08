import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import game from '../game';

export default (history) => {
    return combineReducers({
        router: connectRouter(history),
        [game.NAME]: game.reducer
    });
}
