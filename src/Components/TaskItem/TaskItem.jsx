import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import IconButton from '@material-ui/core/IconButton';
import withPopup from '../../HOC/withPopup';
import Form from '../../Components/Form/Form';
import { useDispatch } from "react-redux";
import {deleteTask} from "../../actions/tasks";

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    }
}));  

const TaskItem = ({ item, openPopup }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <ListItem divider>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            
            <ListItemText primary={item.text} />

            <IconButton 
                color="secondary"
                className={classes.margin}
                onClick={() => {
                    openPopup({
                        PopupComponent: Form,
                        content: item,
                    })
                }}
            ><UpdateIcon /></IconButton>
            
            <IconButton 
                color="primary"
                onClick={() => dispatch(deleteTask(item.id))}
            ><DeleteIcon /></IconButton>
        </ListItem>
    )
};

export default withPopup(TaskItem);
