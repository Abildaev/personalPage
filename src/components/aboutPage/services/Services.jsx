import React from 'react';
import SectionTitle from '../../sectionTitle/SectionTitle';




const Services = (props) => {

  const services = props.servicesBlock.services.map((element, key) =>
    <div className="col-xl-4 col-lg-6 col-12 about-page__margin" key={key}>
      <div className="about-page__service" >
        <span>
          <i className={element.iconName}></i>
        </span>
        <h5>{element.name}</h5>
        <p>{element.descrip}</p>
      </div>
    </div>

  )

  return (
    <div className="about-page__services">
      <SectionTitle componentTitle={props.servicesBlock.componentTitle} />
      <div className="row">
        {services}
      </div>
    </div>
  )
}


export default Services;