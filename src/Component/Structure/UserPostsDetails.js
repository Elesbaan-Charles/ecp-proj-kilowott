import React, {useState} from 'react';
import {useContext} from 'react'
import UserContext from '../../Store/UserContext';
import classes from './UserPostsDetails.module.css';
import wallpaper from '../Media/wallpaper.jpg';
import Modal from './Modal';
import Backdrop from './Backdrop';
import delete_img from '../Media/delete.png';

function UserPostsDetails(props){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    function deletebtnHandler (){
        setModalIsOpen(true);
    }
    function deletebackdropHandler(){
        setModalIsOpen(false);
    }

    const PostCtx = useContext(UserContext);
    const postData = PostCtx.inUsePostC();
    
    return <div stype={{marginTop : "50%"}} className={classes.mainDet}>
        <div className = {classes.btn_del} onClick = {deletebtnHandler}>
            <img src={delete_img} alt="Delete" className = {classes.btn_del_img} />
        </div>
        <img src={wallpaper} alt = "Image" className={classes.main_img} /><br/>
        <textarea className={classes.txtarea} placeholder='Comment Here'></textarea><br/>
        <button className={classes.goBtn}><b>Go</b></button>
            
        {
            props.postDetailsData.map((postsData) => {
                if(postData == postsData.postId){
                    return (
                        <div className={classes.comment}>
                            <div className={classes.head}>"<b>{postsData.name}</b>"   <i>{postsData.email}</i></div>
                            <div style={{padding : "20px"}}>{postsData.body}</div>
                        </div>
                    )        
                }
            })
        }
    { modalIsOpen ? <Modal onCancel={deletebackdropHandler} onConfirm={deletebackdropHandler} /> : null }
    { modalIsOpen ? <Backdrop onCancel={deletebackdropHandler} /> : null }
    </div>
}

export default UserPostsDetails;