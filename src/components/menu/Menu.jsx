import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  const [menu, setMenu] = useState(true);

  function changeMenu() {
    setMenu(!menu);
  }

  function getStateMenu () {
    const windowSize = window.innerWidth
    if (windowSize < 992) {
      setMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getStateMenu);
    return () => window.removeEventListener("load", getStateMenu);
  });

  const socialNet = props.menu.socialNet.map((element, key) => (
    menu && <a href={element.link} className="menu__socnet" target="_blank" key={key}><i className={element.iconName}></i></a>
  ));

  const links = props.menu.navigation.map((element, key) => (
    <li key={key} >
      <NavLink exact to={element.link} className={menu ? "menu__link" : "menu__link menu__link-close"}
        activeClassName="active">{menu ? element.text : (<i className={element.iconName}></i>)}</NavLink>
    </li>
  ));

  const copyright = menu && <p className="menu__copyright">{props.menu.copyright}</p>;



  return (
    <nav className={menu ? "menu" : "menu menu-close"}>
      <div className={menu ? "menu__fixed" : "menu__fixed menu__fixed-close"}>
        <div className={menu ? "menu__wrap" : "menu__wrap menu__wrap-close"}>
          {menu && <div className="menu__socnets">
            {socialNet}
          </div>}
          <ul className={menu ? "menu__links" : "menu__links-close"}>
            {links}
          </ul>
          {copyright}
        </div>
        <button className={menu ? "menu__button" : "menu__button menu__button-close"} onClick={changeMenu}><i className="icon-left-open-big"></i></button>
      </div>

    </nav>
  )
}

export default Menu;