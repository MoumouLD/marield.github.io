import React from "react";
import { useState } from "react";


// const Contact = () => {

//     const [status, setStatus] = useState("Submit");
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setStatus("Sending...");
//       const { name, email, message } = e.target.elements;
//       let details = {
//         name: name.value,
//         email: email.value,
//         message: message.value,
//       };
      
      
//       let response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(details),
//       });
//       console.log("je suis dans le")
//       setStatus("Submit");
//       let result = await response.json();
//       alert(result.status);
//     };

//     return (
//         <div id="contact_container">
//             <h3>If you felt curious and want to get in touch, don't hesitate !</h3>
//             <form action='' id="form" onSubmit={handleSubmit}>
//                 <input type="text"  id="name" placeholder="How you want to be called" required/>
//                 <input type="email" id="email" placeholder="Your email" required/>
//                 <textarea name="message" id="message" rows="8" placeholder="Your message" required></textarea>
//                 <button type="submit">{status}</button>
//             </form>
//         </div>
//     )
// }

import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Input from "../Input/input"
import "./Contact.scss"

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState("Don't worry, I'll gladly read your message !");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('FORM', form.current);
        if (name !== "" && email !== "" && message !== "") {
            emailjs.sendForm('service_nc9uux8', 'template_e9oe4fi', form.current, 'H2drF2VHGGpmbTA71')
                .then((result) => {
                    console.log(result);
                    setTitle("It's waiting in my mail box et will be read soon !");

                }, (error) => {
                    setTitle("Oopsi, my mail box is lazy !");
                    console.log(error.text);
                    console.log(email, name, message)

                });
        }
        else {
            console.log(email, name, message)
            setTitle("A field is Empty");
        }

    };

    const handleEmailChange = (value) => {
        console.log("EMAIL", value)
        setEmail({ ...email, value });
    };

    const handleNameChange = (value) => {
        console.log("NAME", value)
        setName({ ...name, value });
    };
    const handleMessageChange = (e) => {
        let val = e.target.value
        setMessage({ ...message, val});
    };
return (
        <div className={"container-footer"}>
            <div className={'talk'}>
                <h3>{title}</h3>
            </div>

            <form className={"ContactUsForm"} ref={form} onSubmit={sendEmail}>
                <div className={"ContactUsForm-box"}
                     data-aos={'zoom-in'}
                     data-aos-anchor=".container-footer"
                     data-aos-offset="100"
                     data-aos-duration="200">
                    <div className={"Input Input-text"}>
                        <Input id={1}
                               label="How you want to be called"
                               predicted="Thierry Henry"
                               locked={false}
                               active={false}
                               value={name}
                               onChange={handleNameChange}
                               type="text" name="user_name"/>
                    </div>
                    <div className={"Input Input-text"}>
                        <Input id={1}
                               label="Email"
                               predicted="thierryhenry@gmail.com"
                               locked={false}
                               active={false}
                               value={email}
                               type="email" name="user_email"
                               onChange={handleEmailChange}
                        />
                    </div>
                    <div className={"Input Input-textarea"}>
                        <textarea onChange={handleMessageChange} className={"textarea"} name="message" placeholder={"Anything to say ?"}/>
                    </div>
                    <div className={'footer-cv-ctn'}>
                        <div className={"footer-button"}>
                            <div className="send-btn" >
                                <button type="submit" className={'send-span'}>send</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className={"send-ctn"}>
                        <input className={"send"} type="submit" value="Send" />
                    </div> */}
                </div>
            </form>
        </div>
    );
};

// export default Contact;