import React, { useState } from 'react';
import Popup from '../UI/Popup/Popup';

const withPopup = (Component, { isOpenDefault = false } = {}) => (props) => {
    const [ isOpenPopup, setIsOpenPopup ] = useState(isOpenDefault);
    const [ popupContent, setPopupContent ] = useState(null);

    const closePopup = () => setIsOpenPopup(false);

    const openPopup = ({ PopupComponent, content }) => {
        setIsOpenPopup(true);
        setPopupContent(
            <PopupComponent 
                content={content} 
                closePopup={closePopup}
            />
        );
    };

    return (
        <>
            <Component {...props} openPopup={openPopup} />
            { 
                isOpenPopup && (
                    <Popup close={closePopup}>
                        { popupContent }
                    </Popup>
                )
            }
        </>
    )

}

export default withPopup;
