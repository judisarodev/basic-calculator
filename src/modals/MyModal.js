import React, {useContext, useState} from "react";
import '../styles/modal.css'
import { FragmentContext } from "../context/FragmentContext";

const MyModal = ({showTextNoHistory, textNoHistory, body}) => {

    const { setFragment, fragments } = useContext(FragmentContext);
    
    const closeModal = () => {
        setFragment(fragments.BTNS_GRID);
    }

    return(
            <div className="modal-history">
                <div className="modal-history-header">
                    <p>{showTextNoHistory &&<span>{textNoHistory}</span>}</p>
                </div>

                <div className="modal-history-body">
                    {!showTextNoHistory && body }
                </div>

                <div className="modal-history-footer">
                    <p style={{fontSize: '13px'}} onClick={closeModal}>Cerrar</p>
                </div>
            </div>
        
    );
}

export { MyModal };