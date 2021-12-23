import './App.css';
import UserListingData from './Component/Data/UserListingData';
import UserDetails from './Component/Structure/UserDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { UserContextHandler } from './Store/UserContext';
import Header from './Component/Header/Header';
import UserPostsDetails from './Component/Structure/UserPostsDetails';
import Backdrop from './Component/Structure/Backdrop';

function App() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
      //Axios for Users
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=> {
        setUser(res.data)
        .catch(err=> console.log(err))});
      //Axios for Posts  
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=> {
        setPosts(res.data)
        .catch(err=> console.log(err))});
      //Axios for Comments
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res=> {
        setPostDetails(res.data)
        .catch(err=> console.log(err))});
    }, []);

  return (
    <UserContextHandler>
      <BrowserRouter>
        <div className="App">
        <Header />
          <Routes>

            <Route 
              exact 
              path="/" 
              element = {
                <UserListingData 
                data = {user} />
                } />

            <Route 
            exact 
            path="/user" 
            element = {
            <UserDetails 
              data = {user} 
              postData = {posts} 
              postDetailsData = {postDetails} />
              } />

              <Route exact path="/post-details"
              element = {
                <UserPostsDetails
                postDetailsData = {postDetails}
                />
              } />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContextHandler>
  );
}

export default App;
