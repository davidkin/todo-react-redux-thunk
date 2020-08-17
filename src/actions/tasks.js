import {GET_ALL_TASKS, ADD_NEW_TASK, UPDATE_TASK, DELETE_TASK} from './types';
import Api from '../apiService';

export const getAllTasks = () => async (dispatch) => {
    const { data } = await Api.getAllTasks();

    dispatch({
        type: GET_ALL_TASKS,
        payload: data || []
    });
};

export const addNewTask = (body) => async (dispatch, getState) => {
    const { data } = await Api.createTask(body);
    const { tasks } = getState().tasksReducer;
    const newTasks = [...tasks, data];

    dispatch({
        type: ADD_NEW_TASK,
        payload: newTasks
    });
};

export const updateTask = (body) => async (dispatch, getState) => {
    const { data } = await Api.updateTask(body);
    const { tasks } = getState().tasksReducer;
    const existingTaskIndx = tasks.findIndex(value => value.id === body.id);
    const updatedTasks = [...tasks];
    updatedTasks[existingTaskIndx] = data;

    dispatch({
        type: UPDATE_TASK,
        payload: updatedTasks
    });
};

export const deleteTask = (id) => async (dispatch, getState) => {
    await Api.deleteTask(id);
    const { tasks } = getState().tasksReducer;
    const newTasks = tasks.filter(value => value.id !== id);

    dispatch({
        type: DELETE_TASK,
        payload: newTasks
    });
}



