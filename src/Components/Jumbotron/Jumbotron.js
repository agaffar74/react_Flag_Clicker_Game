import React from "react";
import "./Jumbotron.css";

const Jumbotron = props =>
  <div className="jumbotron jumbo-custom">
    <h1 className="display-4">Flags Memory Game</h1>
    <p className="lead" style={{ color: 'white' }}>Click on a flag to earn points, but don't click on the same flag more than once!</p>
    <hr className="my-4"></hr>
   
  </div>

  ;

export default Jumbotron;
