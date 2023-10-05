import React from "react";
import '../about/page.css'
import '../skills/page.css'
import "./services.css";
import { services } from "@/constants/services";
import Skill from "@/components/Skill";

const Services = () => {
  return (
    <div className="skills about">
      <span className="page_title">Services</span>
      <h2>What I Provide</h2>

      <div className="programming__skills">
        {services.map(item => (
          <Skill
          key={item.id}
          desc={item.description}
          skillOrder={item.id}
          title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
