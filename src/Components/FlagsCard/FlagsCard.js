import React from "react";
import "./FlagsCard.css";

const FlagsCard = props => (
  <div className="card" data-id={props.id} onClick= {() => props.removeFlag(props.id)} >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

   
  </div>
);

export default FlagsCard;
