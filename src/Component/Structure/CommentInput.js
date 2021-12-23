import React from 'react';
import classes from './Modal.module.css';
import post_img from '../Media/post.gif';

function CommentInput(props){

    function ConfirmHandler(){
        props.onConfirm();
    }
    return <div className={classes.modal}> 
        <img src={post_img} alt="Post " className={classes.del}/>
        <h2>Add New Post</h2>
        <table align = "center">
            <tr>
                <td><label>Title</label></td>
                <td><input type="text" placeholder='Title' required/></td>
            </tr>
            <tr>
                <td><label>Comment</label></td>
                <td><input type="text" placeholder='Comment' /></td>
            </tr>
            <tr>
                <td colSpan="2"><button onClick={ConfirmHandler} className={classes.btn}  style={{width : "100%", marginLeft: "0"}}>Submit</button></td>
            </tr>
        </table>
    </div>
}
export default CommentInput;