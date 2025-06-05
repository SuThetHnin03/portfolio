import { PiTelegramLogo } from "react-icons/pi"
import "../styles/contact.css"
import { FaViber, FaWhatsapp } from "react-icons/fa"
import { LuFacebook } from "react-icons/lu"
import { SlSocialLinkedin } from "react-icons/sl"
import { Form, Input, Button } from 'antd';
import TextArea from "antd/es/input/TextArea"

const ContactPage = () => {
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
        <Form.Item label="BirthDate" style={{ marginBottom: 0, marginTop: "50px" }}>
          <Form.Item name="name" rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(50%)' }}>
            <Input className="custom-ant-input" placeholder="Input your name" />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(50% - 10px)', margin: '0 0 0 10px' }}>
            <Input className="custom-ant-input" placeholder="Input your email" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="TextArea" style={{ marginTop: "15px" }}>
          <TextArea className="custom-ant-input" rows={8} placeholder="Write a mail" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 0, span: 16 }} style={{ marginLeft: "65px" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </div>
  )
}

export default ContactPage