import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react'
import UserContext from '../../Store/UserContext';
import classes from './UserList.module.css';
import delete_img from '../Media/delete.png';
import Modal from './Modal';
import Backdrop from './Backdrop';

function UserListingStructure(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    function deletebtnHandler (){
        setModalIsOpen(true);
    }
    function deletebackdropHandler(){
        setModalIsOpen(false);
    }

    const UserCtx = useContext(UserContext);

    function UserInUseDetailsHandler (){
        UserCtx.inUseUser(props.id);
    }
    return (
        <div>
            <tr className={classes.usersList}>
                <td className = {classes.userData}>
                    <button id={props.id} className={classes.btn} onClick={deletebtnHandler}>
                        <img src={delete_img} alt="Delete" className = {classes.del} />
                    </button>
                </td>
                <td className = {classes.userData}>
                    {props.id}
                </td>
                <td className = {classes.userData}>
                    {props.name}
                </td>
                <td className = {classes.userData}>
                    {props.username}
                </td>
                <td className = {classes.userData}>
                    <Link to="/user">
                        <button id={props.id} onClick = {UserInUseDetailsHandler} className={classes.btn}>View</button>
                    </Link>
                </td>
            </tr>
            { modalIsOpen ? <Modal onCancel={deletebackdropHandler} onConfirm={deletebackdropHandler} /> : null }
            { modalIsOpen ? <Backdrop onCancel={deletebackdropHandler} /> : null }
        </div>
    );
}
export default UserListingStructure;