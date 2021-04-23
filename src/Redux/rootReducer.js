import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceReducer from './icecream/iceReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
});

export default rootReducer;
