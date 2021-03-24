import React from 'react'
import PropTypes from 'prop-types';

const NavBar = ({title, icon}) => {
    return (
        <nav className={"navbar bg-primary"}>
            <a href={"/"}>
            <h1>
                    <i className={icon}/> {title}
                </h1>
            </a>
        </nav>
    );
    
}

NavBar.defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github'
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar;
