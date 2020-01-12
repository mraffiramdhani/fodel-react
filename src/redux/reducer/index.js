import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import restaurant from './restaurant';
import category from './category';
import item from './items';

const appReducer = combineReducers({
  auth,
  user,
  restaurant,
  category,
  item
})

export default appReducer
