import React from 'react';


const Preloader = (props) => {
  return (
    <div className="dl__wrap">
      <div className="dl">
        <div className="dl__container">
          <div className="dl__corner--top"></div>
          <div className="dl__corner--bottom"></div>
        </div>
        <div className="dl__square"></div>
      </div>
    </div>
  )
}


export default Preloader;