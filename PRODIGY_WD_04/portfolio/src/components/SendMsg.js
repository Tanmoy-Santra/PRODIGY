import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar1 from "./Navbar1";
import Buttompart from "./Buttompart";
// npm i @emailjs/browser

const SendMsg = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fgyhbqs",
        "template_0w6q0wg",
        form.current,
        "ct344qpDzJyBUbopx"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
          alert("message sent sucessfully !");
                },
        (error) => {
          console.log(error.text);
          alert("something went wrong ! <br> send email to tanmoysantra911@gmail.com")
        }
      );
  };

  return (
    <div> 
      <Navbar1/>
      <form ref={form} onSubmit={sendEmail}>
        <h3>please enter your details</h3>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <Buttompart/>
    </div>
  );
};

export default SendMsg;

// Styles
