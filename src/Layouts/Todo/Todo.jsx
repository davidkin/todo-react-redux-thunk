import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TaskList from '../../Components/TaskList/TaskList';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import withPopup from '../../HOC/withPopup';
import Form  from '../../Components/Form/Form';

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'block',
        'text-align': 'center',
        margin: '20px auto'
    },
}));  

const Todo = ({ tasks, openPopup }) => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <Grid item xs={12}>
                <Typography 
                    component="h1" 
                    variant="h2"
                    className={classes.center}
                >TODO LIST</Typography>

                <div className="button-block">
                    <IconButton
                        className={classes.center}
                        color="primary"
                        onClick={() => 
                            openPopup({ 
                                PopupComponent: Form, 
                            })
                        }
                    >
                        <AddCircleOutlineIcon fontSize="large" />
                    </IconButton>
                </div>

                {
                    tasks.length ? (
                        <div className="task-block">
                            <TaskList tasks={tasks} />
                        </div>
                    ) : (
                        <p>Haven't task yet</p>
                    )
                }
            </Grid>
        </Container>
    )
};

export default withPopup(Todo);
