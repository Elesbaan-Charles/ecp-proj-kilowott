import React from 'react';
import { createContext, useState} from 'react';

const UserContext = createContext({
    user: [],
    posts: [],
    inUseUser : (userClick) => {},
    inUseUserC : () => {},
    inUsePost : (userPostClick) => {},
    inUsePostC : () => {}

});

export function UserContextHandler(props){

    const [userInUse, setUserInUse] = useState([]);
    const [postInUse, setPostInUse] = useState([]);
    //Functons for User ID
    function userInUseHandler (userClick) {
        setUserInUse(userClick);
    }

    function userInUseCheck (){
        return userInUse;
    }

    //Function for Post ID
    function postInUseHandler (userPostClick) {
        setPostInUse (userPostClick);
    }

    function postInUseClick (){
        return postInUse;
    }

    const Context = {
        user : userInUse,
        inUseUser : userInUseHandler,
        inUseUserC : userInUseCheck,
        inUsePost : postInUseHandler,
        inUsePostC : postInUseClick
    };

    return <UserContext.Provider value = {Context}>
        {props.children}
    </UserContext.Provider>
}
export default UserContext;