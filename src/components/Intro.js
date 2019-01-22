import React from "react";
import PropTypes from "prop-types";

const Intro = props => (
  <section className="Intro">
    <div className={`Intro-hero ${props.isActive ? 'Intro-hero--active' : ''}`}>
      <h1 className={`Intro-tagline ${props.isActive ? 'Intro-tagline--active' : ''}`}>
        “<span className="u-P-L--1">Love comforteth like <br /> <span className="Intro-taglineHighlight">sunshine&nbsp;after&nbsp;rain</span>”</span>
      </h1>
    </div>
    <div className={`Intro-more ${props.loadHeader ? 'Intro-more--inactive' : ''}`}>
      scroll down to learn more
    </div>
  </section>
);
export default Intro;