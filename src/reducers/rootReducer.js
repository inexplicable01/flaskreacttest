import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
import offerReducer from './offerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  property: propertyReducer,
  offer: offerReducer,
});

export default rootReducer;
