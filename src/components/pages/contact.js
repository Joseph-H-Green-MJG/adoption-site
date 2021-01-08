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
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert('Your email has been sent! Thank you ' + this.state.name);
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const { className} = this.props;
        return (
                <form className={`${className} contact-form`}>
                    <div className='contact-form__header'>
                        <h1>Contact Us</h1>
                    </div>
                    <input
                      className='contact-form__email'
                      type='text'
                      title='Email'
                      name='email'
                      onChange={this.handleChange}
                      placeholder='Email'
                    />

                    <input
                      className='contact-form__name'
                      type='text'
                      title='Name'
                      name='name'
                      onChange={this.handleChange}
                      placeholder='Name'
                    />

                    <textarea
                      className='contact-form__body'
                      value={this.state.body}
                      title='Body'
                      name='body'
                      onChange={this.handleChange}
                      placeholder="Write message here"
                    />

                    <button onClick={this.handleSubmit} className='contact-form__submit'>Send</button>
                </form>
        );
    }
}

export default Contact;