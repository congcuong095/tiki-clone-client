import { combineReducers } from 'redux';
import { ProductReducer } from './ProductReducer';
import ParamReducer from './ParamReducer';

const allReducers = combineReducers({
    ProductReducer,
    ParamReducer,
});

export default allReducers;
