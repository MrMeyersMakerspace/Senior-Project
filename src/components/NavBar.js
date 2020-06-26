import React from 'react';
import NavItem from './NavItem';
import GoogleButton from './GoogleButton';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    activeitem = (itemId) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }

        this.setState({ 'NavItemActive': itemId }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavItem item='Instructions' tolink='/instructions' activeccomponent={this.activeitem} />
                    <NavItem item='View Tests' tolink='/viewtests' activeccomponent={this.activeitem} />
                    <NavItem item='Enter Tests' tolink='/entertests' activeccomponent={this.activeitem} />
                    <GoogleButton />
                </ul>
            </nav>
        )
    }
}