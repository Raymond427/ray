import { combineReducers } from 'redux';
import { menuReducer } from './menuReducer';
import { modalReducer } from './modalReducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  menuReducer,
  modalReducer,
  routing: routerReducer
});
