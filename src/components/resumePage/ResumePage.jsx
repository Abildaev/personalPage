import React from 'react';
import Skills from './skills/Skills';
import ResumeBlock from './resumeBlock/ResumeBlock';



const ResumePage = (props) => {

  return (
    <section className="resume-page">
      <div className="container">
        <Skills skillsBlock={props.resumePage.skillsBlock}/>
        <ResumeBlock resumeBlock={props.resumePage.resumeBlock}/>
      </div>
    </section>
  )
}


export default ResumePage;