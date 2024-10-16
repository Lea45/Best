import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="about-us-container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="text-section">
            <p>
              Welcome to <strong>Caffe Bar Best</strong>, the perfect place to
              unwind and enjoy a unique atmosphere right in the heart of the
              city. Located just next to the historic church, we are proud to be
              the only café in Valpovo with over two decades of tradition.
              Whether you are a regular or a first-time visitor, you'll find a
              warm welcome here.
            </p>
            <p>
              At Caffe Bar Best, we cater to all generations with two spacious
              levels, providing a cozy and vibrant ambiance. Every Friday, we
              host engaging pub quizzes, and on Saturdays, we spice up the night
              with themed parties and live music. Our talented staff ensures
              that every visit is memorable.
            </p>
            <p>
              With a wide selection of beers, spirits, and hot drinks, there’s
              something for everyone. Enjoy our expertly crafted cocktails or a
              simple cup of coffee while soaking in the charm of Valpovo’s most
              beloved café. Our goal is to make you feel right at home.
            </p>
            <p>
              Come visit us at{" "}
              <strong>Trg kralja Tomislava 15, 31550 Valpovo</strong>, or reach
              out to us at <strong>tomica.best@gmail.com</strong> or{" "}
              <strong>091/721-4666</strong>. We look forward to welcoming you!
            </p>
          </div>
          <div className="image-section">
            <div className="about-image cafe-interior1"></div>
            <div className="about-image cafe-interior2"></div>
            <div className="about-image cafe-interior3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
