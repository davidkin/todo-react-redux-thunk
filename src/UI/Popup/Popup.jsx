import React from 'react';
import './Popup.css';

const Popup = ({ close, children }) => (
    <>
        <div className="wrapper" onClick={() => close()}></div>
        <div className="popup">
            { children }
        </div>
    </>
);

export default Popup;