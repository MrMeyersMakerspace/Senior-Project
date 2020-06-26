import React from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends React.Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink} onClick={this.props.activeccomponent.bind(this, this.props.item)}>
                    {this.props.item}
                </Link>
            </li>
        );
    }
}