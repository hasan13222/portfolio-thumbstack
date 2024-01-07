import React from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Skill = ({skillOrder, title, desc}) => {
  return (
    <>
      <div className="skill">
        <span>
          {title.toLowerCase().includes('html') && <FaHtml5 />}
          {title.toLowerCase().includes('css') && <FaCss3 />}
          {title.toLowerCase().includes('tailwind') && <SiTailwindcss />}
          {title.toLowerCase().includes('javascript') && <IoLogoJavascript />}
          {title.toLowerCase().includes('react') && <FaReact />}
          {(title.toLowerCase().includes('bangla') || title.toLowerCase().includes('english')) && skillOrder}
          </span>
        <h3>{title}</h3>
        <p>
          {desc}
        </p>
        <div className="empty"></div>
      </div>
    </>
  );
};

export default Skill;
