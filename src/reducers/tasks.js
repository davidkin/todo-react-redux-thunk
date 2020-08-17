import {GET_ALL_TASKS, ADD_NEW_TASK, UPDATE_TASK, DELETE_TASK} from "../actions/types";

const initState = {
    tasks: []
};

export const tasksReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ALL_TASKS:
        case ADD_NEW_TASK:
        case UPDATE_TASK:
        case DELETE_TASK:
            return {
                tasks: payload
            }

        default:
            return state;
    }
};
