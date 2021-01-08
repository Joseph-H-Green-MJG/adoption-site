import React, { Component } from 'react';

import Contact from '../pages/contact';


class Introduction extends Component {
    constructor() {
        super();
        
        this.scrollFunction();
    }

    scrollFunction() {
        window.onscroll = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("banner").style.cssText = "font-size: 0px; padding: 0px; color: transparent";
            } else {
                document.getElementById("banner").style.cssText = "font-size: 65px; padding-bottom: 20px; color: #040005";
            }
        }
    }

    render() {

        return (
            <div className='introduction'>
                <div id='banner'>
                    <div>Rains Portfolio</div>
                </div>
                <div className='test-photo'>
                    <div className='gradient'></div>
                </div>
                <Contact className='contact__form'/>
            </div>
        );
    }
}

export default Introduction;