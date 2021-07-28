import React from 'react';
import SectionTitle from '../../sectionTitle/SectionTitle';
import foto from '../../../assets/images/aboutPage/foto.jpg';
import resume from '../../../assets/images/aboutPage/resume.pdf';




const AboutMe = (props) => {

  const info = props.aboutMe.info.map((element, key) => (
    <li key={key} className="about-page__list"><span>{element.property} : </span>{element.value}</li>
  ))


  return (
    <div className="about-page__about-me">
      <SectionTitle componentTitle={props.aboutMe.componentTitle} />
      <div className="row align-items-flex-start">
        <div className="col-xl-4 col-lg-5">
          <div className="about-page__img-wrap">
            <img src={foto} alt="#foto" />
          </div>
        </div>
        <div className="col-xl-8 col-lg-7">
          <div className="about-page__text">
            <h3>{props.aboutMe.title} <span>{props.aboutMe.name}</span></h3>
            <p>{props.aboutMe.subtitle}</p>
            <ul className="about-page__info">{info}</ul>
            <a href={resume} className="about-page__link" target="_blank">
              <span>скачать cv</span>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AboutMe;