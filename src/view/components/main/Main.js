import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostList from './../feed/PostList';
import SinglePost from '../singlePost/SinglePost';
import MyProfile from '../myProfile/MyProfilePage';
import UserProfile from '../myProfile/UserProfile';
import UserList from '../people/UserList';
import WelcomePage from '../welcome/WelcomePage';

const Main = () => {
    const sessionId = sessionStorage.getItem('sessionId');
    const home = sessionId ? PostList : WelcomePage;
    return (
        <main className="container mt-5">
            <Switch>
                <Route path="/post/:type/:postId" component={SinglePost} />
                <Route path="/profile/:userId" component={UserProfile} />
                <Route path="/myprofile" component={MyProfile} />
                <Route path="/people" component={UserList} />
                <Route path="/feed" component={home} />
                <Route path="/" component={home} />
            </Switch>
        </main>
    )
}
export default Main;
