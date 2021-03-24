import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class NavBar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fa fa-github'
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    render() {
        return (
            <nav className={"navbar bg-primary"}>
               <a href={"/"}>
                <h1>
                        <i className={this.props.icon}/> {this.props.title}
                    </h1>
               </a>
            </nav>
        );
    }
}

export default NavBar;
