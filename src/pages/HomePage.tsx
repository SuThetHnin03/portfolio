import { SlSocialFacebook } from "react-icons/sl";
import "../styles/home.css";
import { TbBrandTelegram } from "react-icons/tb";
import { PiTiktokLogoLight } from "react-icons/pi";

const HomePage = () => {
  return (
    <div className="home">

      {/* <Link to='/projects'>Project</Link> */}
      <div className="image">
        <img src="./pf.png" alt="" className="pf" />
        <div className="others">
          <img src="./shecodes.gif" alt="" className="shecodes" />
          <div className="socials">
            <SlSocialFacebook />
            <TbBrandTelegram />
            <PiTiktokLogoLight />
          </div>
        </div>
      </div>

      <div className="texts">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Hello, I'm Su Thet Hnin, also known as Zahra. I'm from Myanmar and currently living in
        Mandalay. My journey into web development started in 2022 when I discovered how much I enjoy
        building and creating things with code. Since then, I've been dedicated to learning and
        growing in this field.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;I've explored both front-end and back-end development, and I'm passionate about making
        user-friendly applications and efficient systems. I love challenges that push me to think
        critically and creatively, whether it's designing a database, building a project from
        scratch, or solving tricky coding puzzles. These experiences help me sharpen my skills and
        grow as a developer.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Outside of coding, I enjoy learning from others, whether through online courses, coding
        platforms, or collaborating on projects. I believe every challenge is an opportunity to
        grow, and I'm always eager to take on new opportunities that help me learn and contribute
        meaningfully. That's a little about me. I'd love to hear about your journey and passions!</p>
      </div>


    </div>
  )
}

export default HomePage