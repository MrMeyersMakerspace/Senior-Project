import React from 'react';
import UserContext from '../components/UserContext';
import { Redirect } from 'react-router-dom';

export default class EnterTests extends React.Component {
    render() {
        const user = this.context;
        if (!user.isAuthenticated) {
            return <Redirect to='/' />
        }

        return (
            <div className='condiv home'>
                <h1>This is where you will view testing procedures</h1>
            </div>
        )
    }
}
EnterTests.contextType = UserContext;