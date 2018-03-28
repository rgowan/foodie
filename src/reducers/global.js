import { combineReducers } from 'react-redux';

import foods from './foods';
import food from './foods';

export default combineReducers(combineReducers({ foods, food }));
