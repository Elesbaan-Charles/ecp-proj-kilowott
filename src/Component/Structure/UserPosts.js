import React from 'react';
import classes from './UserPosts.module.css';
import {useContext} from 'react'
import UserContext from '../../Store/UserContext';
import {Link} from 'react-router-dom';
import user_img from '../Media/user_img.png';

function UserPosts (props) {

    const PostCtx = useContext(UserContext);

    return <div>
        {
        props.userPostData.map((dataPost) => {
            if(props.user_id == dataPost.userId){
                function userPostDataHandler(){
                    PostCtx.inUsePost(dataPost.id);
                }
                return (
                    <div className= {classes.PostsCont}>
                        <Link to ="/post-details" style={{ textDecoration: 'none' }}>
                            <p id ={dataPost.id} className = {classes.Title} onClick ={userPostDataHandler}>
                               <b className = {classes.Title_text}> "{dataPost.title}"</b>
                            </p>
                        </Link>
                        <div className = {classes.post_body}>{dataPost.body}</div>
                        <img src = {user_img} alt = "User_Image" className={classes.user_img}/>
                    </div>
                )
            }
        })
        }               
    </div>
}
export default UserPosts;