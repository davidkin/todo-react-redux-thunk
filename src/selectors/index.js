import { createSelector } from 'reselect';

export const tasksSelector = createSelector(
    state => state.tasksReducer.tasks,
    tasks => tasks
);

