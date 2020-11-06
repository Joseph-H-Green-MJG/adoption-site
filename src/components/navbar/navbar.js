import React, { Component } from 'react';
import { withRouter} from 'react-router';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (
            <div className='navbar'>
                <div className='navbar-links'>
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/' activeClassName='nav-link-active'>
                            Introduction
                        </NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to='/story' activeClassName='nav-link-active'>
                            Story
                        </NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to='/contact' activeClassName='nav-link-active'>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);