import { combineReducers } from 'redux';
import { tasksReducer } from './tasks';

const createRootReducer = () => combineReducers({
    tasksReducer
});
export default createRootReducer;

