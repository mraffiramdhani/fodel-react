import React, { useState, useEffect } from 'react';
import { Button, Modal as MD, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Modal = (props) => {

    const optionButton = [
        { label: "create", color: "primary", text: "Confirm" },
        { label: "edit", color: "success", text: "Save Changes" },
        { label: "delete", color: "danger", text: "Delete" }
    ]

    const [buttonColor, setColorButton] = useState("primary")
    const [buttonText, setTextButton] = useState("Confirm")

    useEffect(() => {
        if (props.isType) {
            optionButton.map((value, key) => {
                if (props.isType === value.label) {
                    setColorButton(value.color)
                    setTextButton(value.text)
                }
                return true
            })
        }
    }, [props.isType, optionButton])

    return (
        <MD isOpen={props.isOpen} toggle={props.isToggled}>
            <ModalHeader toggle={props.isToggled}>{props.title}</ModalHeader>
            <ModalBody className="text-center">
                {props.children}
            </ModalBody>
            <ModalFooter>
                <Button color={buttonColor} onClick={props.triggerAction}>{buttonText}</Button>{' '}
                <Button color="secondary" onClick={props.triggerCancel}>Cancel</Button>
            </ModalFooter>
        </MD>
    )
}

export default Modal