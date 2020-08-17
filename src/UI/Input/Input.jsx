import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({
    id,
    label,
    type,
    name,
    value,
    placeholder,
    onChange
}) => (
    <TextField
        id={id}
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus
        required
    />
);

export default Input;