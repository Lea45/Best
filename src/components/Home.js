// src/components/Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="header-image">
        <h1 className="header-text"> Caffe bar Honey</h1>{" "}
      </div>

      <div className="info-card">
        <h2>In short...</h2>
        <p className="description">
          Caffe Bar Honey is located in the very center of the city, right next
          to the Church, and is the only venue in Paris with a twenty-year
          tradition. The venue has two floors. Honey is a place that welcomes
          all generations. On Fridays, we offer pub quizzes, and on Saturdays,
          we host themed parties with live music in various styles. In the cozy
          atmosphere of our bar, you'll find a wide selection of beers and hot
          beverages.
        </p>
        <div className="contact-info">
          <p>
            <strong>Address:</strong> Avenue des Champs-Élysées, Paris
          </p>
          <p>
            <strong>E-mail:</strong> champs.honey@gmail.com
          </p>
          <p>
            <strong>Tel.:</strong> +33(0)15672385
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
