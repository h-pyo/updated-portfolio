import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(`${import.meta.env.VITE_serviceId}`, `${import.meta.env.VITE_templateId}`, form.current!, `${import.meta.env.VITE_publicKey}`)
      .then((result) => {
        console.log(result.text);
        const message = document.getElementById('confirmation-message');
        if (message) {
          message.style.display = 'block';
          setTimeout(() => {
            message.style.display = 'none';
          }, 3000);
        };
      }, (error) => {
        console.log(error.text);
        const message = document.getElementById('failure-message');
        if (message) {
          message.style.display = 'block';
          setTimeout(() => {
            message.style.display = 'none';
          }, 3000);
        };
      });
  };
  return (
    <section className="grid place-content-center h-[100vh]" id='contact-form' data-aos="fade-up" data-aos-once="true"> 
      <div className="lg:w-[400px] lg:px-[15px] lg:pt-[15px] lg:pb-[50px] bg-dark2 w-[1000px] sm:w-[310px] rounded-[90px] flex flex-col mt-0 pt-[15px] pr-[40px] pb-[50px] sm:pb-[25px] pl-[50px]">
        <div className="text-[3rem] sm:text-[2.5rem] font-bold text-center underline decoration-2 decoration-[#9ea0a5] underline-offset-[10px]">Contact Me</div>

        <div className="lg:flex-col mt-[30px] flex">

          <div className="lg:mr-[50px] ml-10 mr-[70px] sm:mr-0 sm:ml-[8px] flex flex-col">
            <div className="flex items-center mb-[30px]">
              <FaEnvelope className="text-[1.5rem] sm:text-[1rem] mr-[5px]" />
              <div className="lg:mr-[50px] ml-10 mr-[70px] flex flex-col">
                <span className="font-bold text-[1.4rem]">Email:</span>
                <span className="text-[1.1rem]">harrispyo@gmail.com</span>
              </div>
            </div>
            <div className="flex mb-5 items-center">
              <FaPhoneAlt className="text-[1.5rem] sm:text-[1rem] mr-[5px]" />
              <div className="lg:mr-[50px] ml-10 mr-[70px] flex flex-col">
                <span className="font-bold text-[1.4rem]">Phone:</span>
                <span className="text-[1.1rem]">+1 732-425-7406</span>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="lg:flex lg:flex-col lg:w-full lg:p-0 lg:m-0 text-black col-start-1 col-end-3 w-[450px] mb-[10px]">
              <input required className="lg:w-full lg:mb-[10px] mr-5 h-10 p-[10px] rounded-[8px] w-[215px] text-[1.1rem]" placeholder="Your name" type="text" name="user_name" />
              <input required className="lg:w-full lg:mb-[10px] mb-2 h-10 p-[10px] rounded-[8px] w-[215px] text-[1.1rem]" placeholder="Your email" type="email" name="user_email" />
            </div>
            <div className="col-start-1 col-end-3 mb-[10px]">
              <textarea required className="w-full text-black resize-none p-[13px] rounded-[8px] h-[150px] text-[1rem]" placeholder="Send a message" name="message" />
            </div>
            <div className="col-start-1 col-end-3 self-center place-content-center">
              <input className="bg-[#f0f0f0] text-dark rounded-[20px] w-[160px] h-[45px] ml-[calc(50%_-_80px)] font-bold text-[1rem] hover:opacity-80 hover:cursor-pointer active:opacity-100" type="submit" value="Send Message" />
            </div>
            <div id="confirmation-message" className="col-start-1 col-end-3 pt-[10px] text-center text-[#73e073] text-[1.1rem] hidden"> Your message was sent successfully! </div>
            <div id="failure-message" className="col-start-1 col-end-3 pt-[10px] text-center text-[#dd5252] text-[1.1rem] hidden"> Sorry, your message failed to send. Please try again! </div>
          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact