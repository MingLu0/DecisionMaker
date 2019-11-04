import React from 'react';
//import Modal from 'react-modal'
import Modal from 'react-modal';

const OptionModal = (props) =>(
        <Modal
           isOpen = {!!props.selectedItem}
           contentLabel = "Selected Option"
           onRequestClose = {props.handleOkButtonAction}
        >
        <h3>Selected Option</h3>
        {props.selectedItem&&<p>{props.selectedItem}</p>}
        <button onClick={props.handleOkButtonAction}>Ok</button>
        </Modal>
);


export default OptionModal;