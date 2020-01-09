import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import restaurant from './restaurant';
import category from './category';

const appReducer = combineReducers({
  auth,
  user,
  restaurant,
  category
})

export default appReducer
