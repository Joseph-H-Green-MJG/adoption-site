import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            name: '',
            body: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({inputName: event.target.value});
    }

    handleSubmit(event) {
        alert('Your email has been sent! Thank you ' + this.state.name);
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <div className='contact-form'>
                    <input type='email' placeholder='Email' />
                    <input type='name' placeholder='Name' />
                    <textarea value={this.state.body} onChange={this.handleChange} placeholder="Write message here" />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Contact;