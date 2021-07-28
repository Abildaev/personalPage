import React from 'react';
import SectionTitle from '../../sectionTitle/SectionTitle';




const ResumeBlock = (props) => {

  const information = props.resumeBlock.information.map((element, key) => 
   <div className="col-lg-6 resume-page__resume-margin" key={key}>
      <div className="resume-page__resume-title">
        <h5>{element.nameTitle}</h5>
      </div>
      <div className="resume-page__resume-timeline">
        {element.timeLine.map((el, key) =>
          <div className="resume-page__resume-item" key={key}>
            <div className="resume-page__resume-content">
              <h6>{el.position}</h6>
              <span>Период:{el.period}</span>
              <p>
                {el.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )


  return (
    <div className="resume-page__resume-block">
      <SectionTitle componentTitle={props.resumeBlock.componentTitle} />
      <div className="row">
        {information}
      </div>
    </div>
  )
}


export default ResumeBlock;