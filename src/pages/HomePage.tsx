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
          <a href="https://www.shecodes.io/graduates/73144-su-thet-hnin" target="_blank"><img src="./shecodes.gif" alt="" className="shecodes" /></a>
          <div className="socials">
            <a href="https://www.facebook.com/hsu.t.hnin.505/" target="_blank"><SlSocialFacebook /></a>
            <a href="https://t.me/Zahra_1795" target="_blank"><TbBrandTelegram /></a>
            <a href="https://www.tiktok.com/@suthethnin_03"  target="_blank"><PiTiktokLogoLight /></a>
          </div>
        </div>
      </div>

      <div className="texts">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Hello, I'm <span className="highlight">Su Thet Hnin (Zahra)</span>. I'm from <span className="highlight">Myanmar</span> and currently living in <span className="highlight">Mandalay</span>. My journey into web development started in 2023 when I discovered how much I enjoy
        building and creating things with code. Since then, I've been dedicated to learning and
        growing in this field.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;I've explored both <span className="highlight">front-end and back-end development</span>, and I'm passionate about making
        user-friendly applications and efficient systems. I love challenges that push me to <span className="highlight">think
        critically and creatively, whether it's designing a database, building a project from
        scratch, or solving tricky coding puzzles.</span> These experiences help me sharpen my skills and
        grow as a developer.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Outside of coding, I enjoy learning from others, whether through online courses, coding
        platforms, or collaborating on projects. I believe every challenge is an opportunity to
        grow, and I'm always eager to take on <span className="highlight">new opportunities that help me learn and contribute
        meaningfully</span>. That's a little about me. I'd love to hear about your journey and passions!</p>
      </div>
    </div>
  )
}

export default HomePage