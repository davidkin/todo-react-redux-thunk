import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import TaskItem from '../TaskItem/TaskItem';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
}));

const TaskList = ({ tasks }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                { tasks.map(item =>
                    <TaskItem key={item.id} item={item} />
                )}
            </List>
        </div>
    )
};

export default TaskList;
