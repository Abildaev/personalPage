import React from 'react';
import AboutMe from './aboutMe/AboutMe';
import Services from './services/Services';
import Reviews from './reviews/Reviews';




const AboutPage = (props) => {

  return (
    <section className="about-page" >
      <div className="container">
        <AboutMe aboutMe={props.aboutPage.aboutMe} />
        <Services servicesBlock={props.aboutPage.servicesBlock} />
        <Reviews reviews={props.aboutPage.reviews} />
      </div>
    </section>
  )
}


export default AboutPage;