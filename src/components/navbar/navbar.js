import React, { Component } from 'react';
import { withRouter} from 'react-router';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (
            <div className='navbar'>
                <NavLink exact to='/' activeClassName='nav-link-active'>
                    Introduction
                </NavLink>
                <NavLink to='/story' activeClassName='nav-link-active'>
                    Story
                </NavLink>
                <NavLink to='/contact' activeClassName='nav-link-active'>
                    Contact
                </NavLink>
            </div>
        );
    }
}

export default withRouter(Navbar);