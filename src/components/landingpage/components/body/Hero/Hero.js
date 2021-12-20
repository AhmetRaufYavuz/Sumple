import React from "react";
import Musician from "./images/musician.svg";
//import { FaChevronRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  
  return (
    <section className="hero" >
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            A free sample library <br />
            for YOU
          </h1>
          <p className="hero-text">
          Download, upload, preview samples of your interest as 
          you wish and use them in your projects royalty-free!!!
          Help support producers by giving them credits.
          </p>
          <span className="group">
            <button className="btn">
              Start now{" "}
              <span className="right-arrow">
              </span>
            </button>
            <div className="contact">
              Contact sales{" "}
              <span className="right-arrow">
              </span>
            </div>
          </span>
        </article>
        <article className="hero-images">
          <img src={Musician} alt="musician image" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
