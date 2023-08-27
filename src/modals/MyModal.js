import React from "react";
import '../styles/modal.css';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../styles/modal.css'

const MyModal = ({openModal, showTextNoHistory, textNoHistory, body, show}) => {
    
    const closeModal = () => {
        show(false);
    }

    return(
        <div className="modal-hisotry-container">
            <Modal isOpen={openModal} className="modal-history">

                <ModalHeader className="modal-history-items modal-history-header">
                    <p>{showTextNoHistory &&<span>{textNoHistory}</span>}</p>
                </ModalHeader>

                <ModalBody className="modal-history-items modal-history-body">
                    {!showTextNoHistory && body }
                </ModalBody>

                <ModalFooter className="modal-history-items modal-history-footer">
                    <p style={{fontSize: '13px'}} onClick={closeModal}>Cerrar</p>
                </ModalFooter>

            </Modal>
        </div>
    );
}

export { MyModal };