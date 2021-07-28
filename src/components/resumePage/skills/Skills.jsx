import React, { useState, useEffect } from 'react';
import SectionTitle from '../../sectionTitle/SectionTitle';



const Skills = (props) => {

  const [count, setCount] = useState(false);
  const skill = props.skillsBlock.skills.map((element, key) => 
      <div className="col-lg-6 resume-page__skill" key={key}>
        <div className="resume-page__progress">
          <span className="resume-page__progress-title">{element.skillName}</span>
          <span className="resume-page__progress-percent">{element.percent}</span>
        </div>
        <div className="resume-page__progress-container">
          <span className="resume-page__progress-inner" style={{ width: count && element.percent }}></span>
        </div>
      </div>
  )

  useEffect(() => {
    setCount(true)
  }, [count]);

  return (
    <div className="resume-page__skills">
      <SectionTitle componentTitle={props.skillsBlock.componentTitle} />
      <div className="row ">
        {skill}
      </div>
    </div>
  )
}

export default Skills;



