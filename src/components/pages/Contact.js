import React from 'react';
import { useState } from 'react';
// import { useForm } from "react-hook-form";

import { validateEmail } from "../utils/validateEmail"
//import {checkLength} from "./utils/checkLength"

// import Dotenv from "./../../webpack.config"
// const url = new Dotenv(process.env.SECRET_URL)

const Contact = () => {
    // console.log(url)

    // Here we set two state variables for firstName and lastName using `useState`
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, 
        // we set the state of either email, name, and message
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();


        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
            setErrorMessage('Name or email is invalid. Both are required for submission.');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        if (!message) {
            setErrorMessage('Message required.');
            return
        }

        // // email me the form
        // const data = null;

        // const xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        
        // xhr.addEventListener("readystatechange", function () {
        //   if (this.readyState === this.DONE) {
        //     console.log(this.responseText);
        //   }
        // });
       
        
        // xhr.open("GET", `${url}`);
        
        // xhr.send(data);

        // Alert the person wanting to contact me that the message has been sent
        alert(`Thank you, ${name}! I will get back to you ASAP with the email you provided. Your message says: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <section id="contact" className="content" >
            <form className="form box" action="mailto:vmcnorrill@gmail.com">
                <p className="title">CONTACT ME</p>
                <div className="field">
                    <label className="label">Name:</label>
                    <div className="control is-medium">
                        <input
                            id="name"
                            value={name}
                            onChange={handleInputChange}
                            name="name"
                            type="text"
                            placeholder="e.g Anne Elliot"
                            required />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email:</label>
                    <div className="control">
                        <input id="email"
                            value={email}
                            onChange={handleInputChange}
                            name="email"
                            type="email"
                            placeholder="e.g. anne@gmail.com"
                            required />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Say something:</label>
                    <div className="control">
                        <textarea id="message"
                            value={message}
                            onChange={handleInputChange}
                            name="textarea"
                            placeholder="e.g. Something here..."
                            rows="5"
                            cols="30"
                            required>
                        </textarea>
                    </div>
                </div>

                <div className="control">
                    <button type="button" className="button submit m-3" onClick={handleFormSubmit}>Submit</button>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </form>
        </section>
    )
}
export default Contact