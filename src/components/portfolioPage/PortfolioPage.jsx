import React, { useState } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { NavLink } from "react-router-dom";
import { Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";




const PorfolioPage = (props) => {

  const [descrip, setDescrip] = useState("");

  function Topic() {
    let { name } = useParams();
    let work = props.portfolioPage.myWork;
    return (
      <div className="about-page__text">
        {work.filter(el => el.name === name).map((el, index) => (
          <div key={index}>
            <h3>{el.name}</h3>
            <p>{el.description}</p>
            <div className="portfolio-page__img-detail">
              <img src={el.photo} alt="" className="portfolio-page__img" />
            </div>
            <a className="about-page__link mt-5" href={el.link} target="blank">перейти на сайт</a>

          </div>
        ))}
      </div>

    );
  }




  let match = useRouteMatch();

  let portfolio = props.portfolioPage.myWork.map((el, key) =>
    <div className="col-lg-4 col-md-6" key={key}>
      <NavLink to={`${match.url}/${el.name}`} className="portfolio-page__img-wrap d-flex flex-column pb-3 mb-4 align-items-center">
        <img src={el.photo} alt={el.photo} className="portfolio-page__img" />
        <h5>{el.name}</h5>
      </NavLink>

    </div>
  )

  return (
    <div className="resume-page">
      <div className="container">
        <Switch>
          <Route path={`${match.path}/:name`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <SectionTitle componentTitle={props.portfolioPage.componentTitle} />
            <div className="row">
              {portfolio}
            </div>
          </Route>


        </Switch>
      </div>
    </div>

  )
}




export default PorfolioPage;