import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonCustom = ({ 
    type, 
    children,
    color = 'primary',
    variant = 'outlined', 
}) => (
    <Button
        type={type}
        variant={variant}
        color={color}
    >{children}</Button>
);

export default ButtonCustom;