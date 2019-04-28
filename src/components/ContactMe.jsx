import React, { Component } from 'react';

class ContactMe extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      collapsed: true,
    };
  };

  handleClick(e){
    this.setState(prevState=>({
      collapsed: !prevState.collapsed,
    }));
  };

  render(){
    return(
      <>
      <div
      className={this.state.collapsed ? 'contact-me' : 'contact-me-expanded'}
      onClick={this.state.collapsed ? this.handleClick : null}
      >
        Contact Me
        {!this.state.collapsed &&
          <form
            method="POST"
            action="https://formspree.io/rbrtmorrissey86@gmail.com"
            className='formspree'

          >
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="input"
            />
            <button
              type="submit"
              className="input"
            >
              Send Message
            </button>
          </form>
        }
      </div>
      {!this.state.collapsed &&
        <div
          className='modal-background'
          onClick={this.handleClick}
        />
      }
      </>
    );
  };
};

export default ContactMe
