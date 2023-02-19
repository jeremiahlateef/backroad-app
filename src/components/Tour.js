import React from "react";
import { tours } from "./data";
import Tours from "./Tours";

const Tour = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tours {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};

export default Tour;
