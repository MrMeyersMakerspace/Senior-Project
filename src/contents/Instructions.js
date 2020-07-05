import React from 'react';
import UserContext from '../components/UserContext';

export default class Instructions extends React.Component {
    render() {
        const user = this.context;
        return (
            <div className='condiv home'>
                <h1>This is how you use the application</h1>
                <article>These are the instructions on how to use the application.</article>
                <p>This is the user's email: {user.email}</p>
                <p>The user is logged in: {user.isAuthenticated.toString()}</p>
            </div>
        )
    }
}
Instructions.contextType = UserContext;