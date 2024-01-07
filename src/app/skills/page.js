import React from "react";
import '../about/page.css'
import "./page.css";
import { languageSkills, programmingSkills } from "@/constants/skill";
import Skill from "@/components/Skill";

const Skills = () => {
  return (
    <div className="skills about">
      <span className="page_title">Skills</span>
      <h2>Programming Skills</h2>

      <div className="programming__skills">
        {programmingSkills.map(item => (
          <Skill
          key={item.id}
          desc={item.description}
          title={item.title}
          />
        ))}
      </div>

      <h2 className="lang_skill_title">Language Skills</h2>
      <div className="language__skills programming__skills">
        {languageSkills.map(item => (
          <Skill
          key={item.id}
          skillOrder={item.id}
          title={item.title}
          desc={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
