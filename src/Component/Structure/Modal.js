import React from 'react';
import classes from './Modal.module.css';
import del from '../Media/del.gif';

function Modal(props){

    function CancelHandler(){
        props.onCancel();
    }
    function ConfirmHandler(){
        props.onConfirm();
    }
    return ( 
        <div className={classes.modal}>
            <img src={del} alt="Delete" className={classes.del} />
            <p style={{color : "red"}}><b>Are you sure!!</b></p>
            <button  className={classes.btn_alt} onClick={CancelHandler}>Cancel</button>
            <button className={classes.btn} onClick={ConfirmHandler}>Confirm</button>
        </div>
    );
}
export default Modal;