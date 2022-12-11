import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact_container">
            <h3>If you felt curious and want to get in touch, don't hesitate !</h3>
            <form action='' id="form">
                <input type="text"  placeholder="How you want to be called" required/>
                <input type="email"  placeholder="Your email" required/>
                <textarea name="message" rows="8" placeholder="Your message" required></textarea>
                <button type="submit">Send it !</button>
            </form>
        </div>
    )
}

export default Contact;