import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_serviceId}`, `${process.env.REACT_APP_templateId}`, form.current, `${process.env.REACT_APP_publicKey}`)
      .then((result) => {
        console.log(result.text);
        if (document.getElementById('confirmation-message')) {
          const message = document.getElementById('confirmation-message');
          message.style.display = 'block';
          setTimeout(() => {
            message.style.display = 'none';
          }, 3000);
        };
      }, (error) => {
        console.log(error.text);
        if (document.getElementById('failure-message')) {
          const message = document.getElementById('failure-message');
          message.style.display = 'block';
          setTimeout(() => {
            message.style.display = 'none';
          }, 3000);
        };
      });
  };
  return (
    <section className="contact" id='contact-form' data-aos="fade-up" data-aos-once="true"> 
      <div className="contact-container">
        <div className="header">Contact Me</div>

        <div className="submission-area">

          <div className="info">
            <div className="email">
              <FaEnvelope className="contact-icon" />
              <div className="info">
                <span className="contact-heading">Email:</span>
                <span className="contact-details">hpyo@stevens.edu</span>
              </div>
            </div>
            <div className="phone">
              <FaPhoneAlt className="contact-icon" />
              <div className="info">
                <span className="contact-heading">Phone:</span>
                <span className="contact-details">+1 732-425-7406</span>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="name-email">
              <input required className="input-name" placeholder="Your name" type="text" name="user_name" />
              <input required className="input-email" placeholder="Your email" type="email" name="user_email" />
            </div>
            <div className="message-area">
              <textarea required className="input-message" placeholder="Send a message" name="message" />
            </div>
            <div className="contact-submit">
              <input className="submit-button" type="submit" value="Send Message" />
            </div>
            <div id="confirmation-message"> Your message was sent successfully! </div>
            <div id="failure-message"> Sorry, your message failed to send. Please try again! </div>
          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact