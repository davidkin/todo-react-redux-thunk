import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Input from '../../UI/Input/Input';
import ButtonCustom from '../../UI/Button/Button';
import './Form.css';
import {tasksSelector} from "../../selectors";
import {addNewTask, updateTask} from "../../actions/tasks";

const Form = ({ 
    content,
    closePopup, 
}) => {
    const [text, setText] = useState(content ? content.text : '');

    const dispatch = useDispatch();
    const tasks = useSelector(tasksSelector);

    const onSubmit = (e) => {
        e.preventDefault();

        // eslint-disable-next-line no-mixed-operators
        const id = content && content.id || tasks.length && tasks[tasks.length - 1].id + 1;
        const body = {
            id,
            text
        };

        if (content) {
            dispatch(updateTask(body));
        } else {
            dispatch(addNewTask(body));
        }

        closePopup();
    }

    return (
        <form onSubmit={onSubmit} className="form">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className="exitButton"
                onClick={() => closePopup()}
            >x</a>

            <Input 
                type="text" 
                id="input1" 
                name="text" 
                label="Text" 
                value={text}
                placeholder="Enter your text"
                onChange={setText}
            />

            <div className="btn-block">
                <ButtonCustom 
                    type="submit"
                    variant="text"
                    disabled={!text}
                >Send</ButtonCustom>
            </div>
        </form>
    )
};

export default Form;
