import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import NavBar from './NavBar';
import UserContext from './UserContext';

const CLIENT_ID = '1064606944267-hani90494cs114jprs50gtfp42q93msl.apps.googleusercontent.com';

// Add Context for isAuthenticated so that it is accessable globally

export default class GoogleButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    login(response) {
        const user = this.context;
        if (response.tokenId) {
            this.setState({
                isAuthenticated: true,
                pictureLink: response.profileObj.imageUrl
            });

            user.setAuthentication(true);
            user.setEmail(response.profileObj.email);

            console.log('Login Successful');
        }
        console.log(response);
    }

    logout(response) {
        const user = this.context;

        this.setState({
            isAuthenticated: false
        });

        user.setAuthentication(false);
        user.setEmail('');

        console.log('Logout Successful');

        // Refresh page so user is redirected home and app is reset
        window.location.reload();
    }

    handleLoginFailure(response) {
        alert('Failed to log in');
    }

    handleLogoutFailure(response) {
        alert('Failed to log out');
    }

    render() {
        return (
            <div id='GoogleStuff'>
                {this.state.isAuthenticated ?
                    <GoogleLogout
                        clientId={CLIENT_ID}
                        onLogoutSuccess={this.logout}
                        onFailure={this.handleLogoutFailure}
                    ><img src={this.state.pictureLink} alt='Profile Pic' className='profilepic' /><div id='logoutfont'>Logout</div></GoogleLogout> :
                    <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText='Login'
                        onSuccess={this.login}
                        onFailure={this.handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        responsetype='code,token'
                    />
                }
            </div>
        )
    }
}
GoogleButton.contextType = UserContext;