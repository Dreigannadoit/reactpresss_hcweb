import React, { useState } from 'react';
import "../css/Contact.css";
import { logo_col } from '../assets/logo';
import { bookMeeting, interestForm, socials } from '../constants';
import TitleHead from '../parts/TitleHead';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    formData.append("access_key", "ab648fe0-cebe-424c-9b2f-755ab5fe08f4");
  
    // Dynamically setting the email subject to the form's subject field
    const subject = formData.get("subject");
    formData.append("subject", subject); // Web3Forms uses this field for email subject
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
  
    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "Message Sent!",
        icon: "success",
      });
      setFormSubmitted(true); // Set the state to replace the form
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try Again.",
      });
    }
  };
  

  return (
    <section className='contact padding_side' id='contact'>
      <div className="form_side">
        <span>CONTACT FORM</span>
        <TitleHead header="We are here to serve you..." />
        <br />

        {formSubmitted ? (
          <div className="success-message">
            <h2>Thank you for your message!</h2>
            <br />
            <p>Please keep an eye on your inbox. <br /> We’ll be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="ab648fe0-cebe-424c-9b2f-755ab5fe08f4"></input>
            <div className="client_name">
              <input
                type="text"
                id="name"
                className="poppins-regular"
                name="name"
                placeholder="NAME"
                required
              />
              <input
                type="email"
                id="email"
                className="poppins-regular"
                name="email"
                placeholder="EMAIL"
                required
              />
            </div>
            <input
              type="text"
              id="subject"
              className="poppins-regular"
              name="subject"
              placeholder="SUBJECT"
              required
            />
            <textarea
              id="clMessage"
              className="poppins-regular"
              name="message"
              placeholder="MESSAGE"
              required
            />
            <button type="submit" className="cta poppins-regular">
              Submit
            </button>
          </form>
        )}
      </div>

      <div className="links_side">
        <img src={logo_col} alt="" />

        <div>
          <div className="form">
            <h1>FILL OUT FORM</h1>
            <a href={interestForm} target="_blank" className="cta" rel="noopener noreferrer">
              LET'S GET STARTED
            </a>
          </div>

          <div className="email">
            <h1>Email</h1>
            <a href="mailto:support@hirecultureva.com">support@hirecultureva.com</a>
          </div>
        </div>

        <div>
          <div className="guide">
            <h1>TO BOOK A MEETING</h1>
            <a href={bookMeeting} target="_blank" className="cta" rel="noopener noreferrer">
              CLICK HERE!
            </a>
          </div>

          <div className="socials">
            <h1>SEE US ON</h1>
            <div className="link">
              {socials.map((social, index) => (
                <a key={index} href={social.link} rel="noopener noreferrer">
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
