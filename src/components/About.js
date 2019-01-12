import React from "react";
import PropTypes from "prop-types";

const About = props => (
  <section className="About" id="welcome">
    <div className="u-Flex u-AlignItemsCenter">
      <div className="u-P--10 u-Col">
        <h1>Sara White</h1>
        <p>
          Thank you for visiting my page! I’m here to share my practices for healthy living. Join me for a yoga class or a CrossFit class, or contact me to request a private training session to get started on your wellness journey. Follow me for weekly tips on creating your best life!
        </p>
      </div>
      <div className="u-Col">
        <img src="http://localhost:8080/src/images/crossfit.jpg" className="u-Img" />
      </div>
    </div>
    <h1 className="u-P-L--10 u-P-T--10" id="yoga">Yoga</h1>
    <div className="u-Flex">
      <div className="u-P-L--10 u-P-R--10 u-Col">
        <p>
          I learned basic yoga poses as a child and began attending classes as a teenager, initially as a way to stretch after soccer practice. While I gained strength and mobility through these classes, I found that yoga was much more than exercise and began using the things I learned in class to help navigate through the emotional and spiritual obstacles of adolescence. I went to college at MassArt to study painting and developed a process for creating art that gave me the same meditative, therapeutic stimulus. You could find me in my studio practicing asana or immersed in a project, continuing to grow into my own spirit. After graduating, I traveled to India to study yoga. I completed a 200 hr YTT with Siddhi Yoga, as well as an additional course in yoga anatomy with Parimukti Yoga.
        </p>
      </div>
      <div className="u-P-L--10 u-P-R--10 u-Col">
        <p>
          I came home and began building a life that would incorporate all of the things that bring me joy. I teach yoga on the South Shore at studios, gyms and schools. My classes focus on creating strength and mobility to practice safely and allow students to prolong their active lifestyles and live their happiest lives. I hope that no matter what they come to class looking for, they leave stronger in body as well as mind and are able to apply these strengths into daily life like I have done.
        </p>
      </div>
    </div>
    <div className="About-gallery">
      <img src="http://localhost:8080/src/images/crossfit.jpg" className="About-galleryImg" />
      <img src="http://localhost:8080/src/images/crossfit.jpg" className="About-galleryImg" />
      <img src="http://localhost:8080/src/images/crossfit.jpg" className="About-galleryImg" />
      <img src="http://localhost:8080/src/images/crossfit.jpg" className="About-galleryImg" />
    </div>
    <div className="u-Flex About-crossfit" id="crossfit">
      <div className="u-P--10 u-Col">
        <h1>CrossFit</h1>
        <p>
          I learned basic yoga poses as a child and began attending classes as a teenager, initially as a way to stretch after soccer practice. While I gained strength and mobility through these classes, I found that yoga was much more than exercise and began using the things I learned in class to help navigate through the emotional and spiritual obstacles of adolescence. I went to college at MassArt to study painting and developed a process for creating art that gave me the same meditative, therapeutic stimulus. You could find me in my studio practicing asana or immersed in a project, continuing to grow into my own spirit. After graduating, I traveled to India to study yoga. I completed a 200 hr YTT with Siddhi Yoga, as well as an additional course in yoga anatomy with Parimukti Yoga.
        </p>
      </div>
      <div className="u-HiddenDesktop u-Col">
        <img src="http://localhost:8080/src/images/crossfit.jpg" className="u-Img" />
      </div>
    </div>
  </section>
);
export default About;