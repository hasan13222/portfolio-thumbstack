import {FaFacebookF, FaLinkedinIn, FaGithub} from 'react-icons/fa'
import Image from "next/image";
import { images } from "../assets";
import "./page.css";

export default function Home() {
  return (
    <div className="home">
      <div className="image">
        <Image src={images.profilePic} alt="profile picture" />
      </div>
      <div className="texts">
        <h2>Jamil Hasan</h2>
        <h4>React Developer</h4>
        <p>Passionate Web Developer and logical thinker who is happy to introduce himselt as a front end developer.</p>
        <div className="icons">
          <a href="https://www.facebook.com/jamil.butex42/" target="_blank" rel={"noreferrer"}>
          <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/jamil-butex42/">
          <FaLinkedinIn />
          </a>
          <a href="https://github.com/hasan13222">
          <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
