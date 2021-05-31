import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div>
        
      <h1 className="card-container" key={props.city.id}>
        <img alt='city' src={`https://loremflickr.com/320/240/${props.city.photo},${props.city.keyword}/all`}/> 
        <h2 className="city-name">{props.city.name}</h2>
      </h1>
    </div>
  );
};

//        {props.city.name}

