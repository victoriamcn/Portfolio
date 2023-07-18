import {useState } from 'react';
import { validateEmail } from "./utils/validateEmail"

const Contact = () => {
    

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [submitted, setSubmitted] = useState("");


    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, 
        // we set the state of name, company, email and body message
        if (inputType === 'name') {
            setName(inputValue);
        }
        if (inputType === 'company') {
            setCompany(inputValue);
        }
        if (inputType === 'email') {
            setEmail(inputValue)
        }
        if (inputType === 'body') {
            setBody(inputValue)
        }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const config = {
        SecureToken: 'd5b833d2-eb90-4c74-a04e-0d68527529ce',
        To : 'vmcnorrill@gmail.com',
        From : {email},
        Subject : `${name} of ${company} Reaching out from Portfolio`,
        Body : {body},
    };

        // First, check to see if the email is not valid or if the name/message is empty.
        // If so set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid. Both are required for submission.');
        }  else if (!name){
            setErrorMessage('Your name required.');
        } else if (!company){
            setErrorMessage('Company/business you represent required.');
        } else if (!body) {
            setErrorMessage('Message required.');
        } else {
            setSubmitted(`Thank you, ${name} of ${company}! I will be in touch soon.`)
        }

        // Second, send the message to victoria
        if (window.Email) {
            window.Email.send(config)
        }

        setName('');
        setCompany('');
        setEmail('');
        setBody('');
    };


    return (
        <section id="contact" >
            <form 
            className="form" 
            onSubmit={handleSubmit}
            >
                <p className="title">CONTACT ME</p>
                <div className="field">
                    <label className="label">Your Name:</label>
                    <div className="control is-medium">
                        <input
                            id="name"
                            className="input"
                            value={name}
                            onChange={handleInputChange}
                            name="name"
                            type="text"
                            placeholder="e.g Anne Elliot"
                            required />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Your Company/Business:</label>
                    <div className="control is-medium">
                        <input
                            id="company"
                            className="input"
                            value={company}
                            onChange={handleInputChange}
                            name="company"
                            type="text"
                            placeholder="e.g Awesome Business, LLC."
                            required />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email:</label>
                    <div className="control">
                        <input 
                            id="email"
                            className="input"
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
                        <textarea
                            id="body"
                            className="textarea"
                            value={body}
                            onChange={handleInputChange}
                            name="body"
                            type="text"
                            placeholder="e.g. Something here..."
                            rows="5"
                            cols="30"
                            required>
                        </textarea>
                    </div>
                </div>

                <div className="control">
                    <button
                    type="button"
                    className="button submit m-3"
                    onClick={handleSubmit}
                    >
                    Submit
                    </button>
                </div>
                {
                errorMessage && (
                    <div className="notification is-warning">
                        <button className="delete"></button>
                        {errorMessage}
                    </div>
                    )
                }
                {
                    submitted && (
                        <div className="notification is-info">
                            {submitted}
                        </div>
                    )
                }
            </form>
        </section>
    )
}
export default Contact;