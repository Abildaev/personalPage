import React from 'react';



const SectionTitle = (props) => {
  return (
    <div className="title">
        <h2 className="title__title">{props.componentTitle.title}</h2>
        <p className="title__subtitle">{props.componentTitle.subtitle}</p>
    </div>
  )
}


export default SectionTitle;