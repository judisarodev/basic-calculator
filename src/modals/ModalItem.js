import React from "react";
import '../styles/modalItemBox.css'

const ModalItem = ({children}) => {
    return(
        <div className="modal-history-item">
            {children}
        </div>
    );
}

export { ModalItem }; 