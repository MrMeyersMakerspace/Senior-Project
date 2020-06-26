import React from 'react';
import Social from '../components/Social';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className='condiv home'>
                <h1>Titration Tracking Web App</h1>
                <p>Welcome to the titration tracking web application, created to organize and keep track of all of your chemical tests.  In order to use this application you must login to your Google account.  Please login by pressing the Google button on the left hand side.</p>
                <h2>You must be logged in to use the application.  Please click the Google button to login.</h2>
                <Social />
            </div>
        );
    }
}