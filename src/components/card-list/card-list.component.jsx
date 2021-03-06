import React from "react";
import "./card-list.styles.css";
import {Card} from '../card/card.component.jsx';

export const CardList = props => {
  return (
    <div className="card-list">
      {props.cities.map((city) => (
        <Card key={city.id} city={city} />
      ))}
    </div>
  );
};
