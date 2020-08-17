import React, {useEffect} from 'react';
import Todo from '../../Layouts/Todo/Todo';
import { useSelector, useDispatch } from "react-redux";
import { tasksSelector } from '../../selectors';
import { getAllTasks } from "../../actions/tasks";

const Main = () => {
    const tasks = useSelector(tasksSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks());
    }, [dispatch]);

    if(!tasks.length) {
        return <p>Loading...</p>
    }

    return <Todo tasks={tasks} />
};

export default Main;
