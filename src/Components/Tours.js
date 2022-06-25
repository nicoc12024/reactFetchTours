import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div className="tours-box">
        {tours.map((item) => {
          return <Tour key={tours.id} {...item} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
