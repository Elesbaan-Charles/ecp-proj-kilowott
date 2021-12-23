import React, { useState } from 'react';
import {useContext} from 'react'
import UserContext from '../../Store/UserContext';
import classes from './UserPage.module.css';
import user_img from '../Media/user_img.png';
import UserPosts from './UserPosts';
import CommentInput from './CommentInput';
import Backdrop from './Backdrop';

function UserDetails(props){

    const [followbtn, setFollowBtn] = useState(false);
    const [f_btn, setF_Btn] = useState('Follow');

    function followButtonHandler (){
        if(followbtn == false){
            setFollowBtn(true);
            setF_Btn('Unfollow');
        } else {
            setFollowBtn(false);
            setF_Btn('Follow');
        }
        
    }

    const [inputIsOpen, setInputIsOpen] = useState(false);
    
    function submitbtnHandler (){
        setInputIsOpen(true);
    }
    function deletebackdropHandler(){
        setInputIsOpen(false);
    }

    const UserCtx = useContext(UserContext);
    const userData = UserCtx.inUseUserC();

     return <div style = {{marginTop : "100px"}}>
        {
             props.data.map((data) => {
                if(userData == data.id) {
                    return ( 
                    <section className={classes.cont}>
                        <div className={classes.division_profile}>
                            <img src = {user_img} alt = "User_Image" className={classes.user_img}/>
                            <div><br/>Name : {data.name}</div>
                            <div>UserName : {data.username}</div>
                            <div>Phone Number : {data.phone}</div>
                            <div className = {classes.follow_btn} onClick={followButtonHandler}>{f_btn}</div>
                            <div className={classes.Addbtn} onClick={submitbtnHandler}>+</div>
                        </div>
                        <div className = {classes.division_details}>
                            <UserPosts 
                                userPostData = {props.postData}
                                userPostDetailData = {props.postDetailsData} 
                                user_id = {userData} />
                        </div>
                    </section>
                    );
                }
            })
        }
        { inputIsOpen ? <CommentInput onConfirm={deletebackdropHandler} /> : null }
        { inputIsOpen ? <Backdrop onCancel={deletebackdropHandler} /> : null }
    </div>
}
export default UserDetails;