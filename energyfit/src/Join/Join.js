import React, { useRef } from "react";
import "./Join.css";
import emailjs from 'emailjs-com'; // Corrected import statement

const Join = () => {

  const alertSub = () => alert('Thank you for joining us !')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vmk0qmb', 'template_5rtbvim', form.current, 'fgy49lU9oWF4Hr02O') // Make sure to replace placeholders with your actual values
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span className="color-text"> LEVEL UP</span>
        </div>
        <div>
          <span className="color-text">YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your email address" />
          <button className="btn btn-j" onClick={alertSub}>Join Now</button>
        </form>
        <hr/>
      </div>
      
    </div>
  );
};

export default Join;
