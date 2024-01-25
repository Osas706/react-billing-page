import React from 'react';
import '../index.css';

const Subscribe = () => {

  const month = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Octo","Nov","Dec"];

  const d = new Date();
  let name = month[d.getMonth()];
  let year = d.getFullYear();

  return (
    <div className="subscription">
        <h4>Your plan</h4>

        <div className="subscription-option">
        <h3>Pro Annual</h3>
        <h6>Renews on {name}, {year}</h6>
        </div>

        <button>Cancel subscription</button>
  </div>
  )
}

export default Subscribe
