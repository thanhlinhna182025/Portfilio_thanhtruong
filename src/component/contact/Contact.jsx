import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rj8a5h5",
        "template_4wnh15h",
        form.current,
        "APvv_DQbxuos6S-I0"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      {/* Left Side */}
      <div className="ct-left">
        <span>Get it touch</span>
        <span>Contact me</span>
      </div>
      {/* Right Side */}
      <div className="ct-right">
        <form className="ct-form" ref={form} onSubmit={sendEmail}>
          <input placeholder="Name" type="text" name="user_name" />
          <input placeholder="Email" type="email" name="user_email" />
          <textarea placeholder="Message" name="message" />
          <button className="button ct-button" type="submit" value="Send">
            Send
          </button>
          {done && <span>Thank you contacted me </span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
