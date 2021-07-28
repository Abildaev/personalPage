import React,{useState, useEffect} from 'react';
import { Route, Switch} from "react-router-dom";

import 'bootstrap/scss/bootstrap.scss';
import './styles/App.scss';





import Preloader from './components/preloader/Preloader';
import Menu from './components/menu/Menu';
import HomePage from './components/home/Home';
import AboutPage from './components/aboutPage/AboutPage';
import ResumePage from './components/resumePage/ResumePage'
import PorfolioPage from './components/portfolioPage/PortfolioPage';


function App(props) {

  const [preloader,setPreloader] = useState(true);

  function loading () {
    setPreloader(!preloader)
  }

  useEffect(() => {
    window.addEventListener("load", loading);
    return () => window.removeEventListener("load", loading);
  })


  return (
      <div className= "wrapper">
        {preloader && <Preloader/>}   
          <div className="App">
          <Menu menu= {props.data.menu}/>
          <Switch>
            <Route exact path='/' render ={ () => <HomePage homePage ={props.data.homePage}/>}/>
            <Route  path='/about' render ={ () => <AboutPage aboutPage={props.data.aboutPage}/>}/> 
            <Route  path='/resume' render ={ () => <ResumePage resumePage={props.data.resumePage}/>}/> 
            <Route  path='/portfolio' render ={ () => <PorfolioPage portfolioPage={props.data.portfolioPage}/>}/>
          </Switch>
          
          </div>
    </div>
  )
}


export default App;
