import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '1064606944267-hani90494cs114jprs50gtfp42q93msl.apps.googleusercontent.com';

// Add Context for isLoggedIn so that it is accessable globally

export default class GoogleButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            name: ''
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    login(response) {
        if (response.tokenId) {
            this.setState({
                isLoggedIn: true,
                email: response.profileObj.email,
                pictureLink: response.profileObj.imageUrl
            });

            console.log('Login Successful');
        }
        console.log(response);
    }

    logout(response) {
        this.setState({
            isLoggedIn: false,
            name: ''
        });

        console.log('Logout Successful');
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
                {this.state.isLoggedIn ?
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
