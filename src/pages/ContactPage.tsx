import { PiTelegramLogo } from "react-icons/pi"
import "../styles/contact.css"
import { FaViber, FaWhatsapp } from "react-icons/fa"
import { LuFacebook } from "react-icons/lu"
import { SlSocialLinkedin } from "react-icons/sl"
import { Button } from 'antd';
import { useRef } from "react"
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_grmkqri', 'template_6xu0aeh', 
        form.current, {
        publicKey: 'stSzpmh27gYzoA6Nt',
      })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  }

  return (
    <div className="contactPage">
      <div className="contact">
        <ul className="icon">
          <li><PiTelegramLogo /></li>
          <li><FaWhatsapp /></li>
          <li><LuFacebook /></li>
          <li><FaViber /></li>
          <li><SlSocialLinkedin /></li>
        </ul>
        <ul className="info">
          <li>@Zahra_1795</li>
          <li>+959788939887</li>
          <li>@HsuThetHnin08</li>
          <li>+959788939887</li>
          <li>Su Thet Hnin</li>
        </ul>
      </div>
      <div className="fields">
        <h1>Let's Get In Touch!</h1>
        <p>Have a project in mind, a question, or just want to connect? I’m always open to new opportunities and collaborations. <br /> Drop a message—I’ll get back to you soon!</p>
        <form ref={form} onSubmit={sendEmail}>
          <div style={{ display: 'flex', gap: '10px', marginTop: "50px" }}>
            <input type="text" name="user_name" className="custom-ant-input" placeholder="Input your name" required style={{ width: '50%' }} />
            <input type="email" name="user_email" className="custom-ant-input" placeholder="Input your email" required style={{ width: '50%' }} />
          </div>

          <input type="text" name="subject" className="custom-ant-input" placeholder="Input your subject" required style={{ width: '100%', marginTop: '15px' }} />

          <textarea name="message" className="custom-ant-input" rows={8} placeholder="Write a mail" required style={{ width: '100%', marginTop: '15px' }}></textarea>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </form>

      </div>
    </div>
  )

}

export default ContactPage