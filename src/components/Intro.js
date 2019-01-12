import React from "react";
import PropTypes from "prop-types";

const Intro = props => (
  <section className="Intro">
    <div className="Intro-hero">
      <h1 className="Intro-tagline">
        <div><span className="Intro-taglineHighlight">healthy</span> living</div>
        <div className="u-M-L--10">starts with <span className="Intro-taglineHighlight">you</span></div>
      </h1>
    </div>
    <div className={`Intro-more ${props.loadHeader ? 'Intro-more--inactive' : ''}`}>
      <h2>scroll down to learn more</h2>
    </div>
  </section>
);
export default Intro;