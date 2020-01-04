import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.isToggled}>
            <ModalHeader toggle={props.isToggled}>Delete Data</ModalHeader>
            <ModalBody className="text-center">
                This action cannot be undone. Continue ?
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={props.isToggled}>Delete</Button>{' '}
                <Button color="secondary" onClick={props.isToggled}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteModal