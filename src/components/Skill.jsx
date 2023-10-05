import React from "react";

const Skill = ({skillOrder, title, desc}) => {
  return (
    <>
      <div className="skill">
        <span>{skillOrder}</span>
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
