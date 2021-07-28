import React from 'react';
import { NavLink } from "react-router-dom";
import avtar from '../../assets/images/homePage/avatar.jpg';



const HomePage = (props) => {
  return (
    <section className="home-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="home-page__img-wrap">
              <img src={avtar} alt="avatar"/>
            </div>
            <h1 className="home-page__title">Сайт разработал <span>{props.homePage.name}</span></h1>
            <p className="home-page__subtitle">{props.homePage.subtitle}</p>
            <div>
              <NavLink className="home-page__link" to="/portfolio">Мое портфолио</NavLink>
              <button className="home-page__btn"><i className="icon-play-button"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


export default HomePage;