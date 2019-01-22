import React from "react";
import PropTypes from "prop-types";
import yoga from '../images/1.jpg';
import crossfit from '../images/crossfit.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import videoBg from '../images/video_bg.png';

const About = props => (
  <section className="About" id="welcome">
    <div className="u-Flex u-AlignItemsCenter">
      <div className="u-P--10 u-Col">
        <h1>Sara White</h1>
        <p className="u-P-T--5">
          Thank you for visiting my page! I’m here to share my practices for healthy living. Join me for a yoga class or a CrossFit class, or contact me to request a private training session to get started on your wellness journey. Follow me for weekly tips on creating your best life!
        </p>
      </div>
      <div className="u-Col">
        <img src={yoga} className="u-Img" />
      </div>
    </div>
    <div id="yoga">
      <div className={`About-yoga ${props.isActive ? 'About-yoga--active' : ''}`}>
        <h1 className="u-P-L--10 u-P-T--10 u-HiddenMobile">Yoga</h1>
      </div>
      <div className="u-Flex u-P-T--10">
        <div className="u-P-B--10 u-P-L--10 u-P-R--10 u-Col">
          <h1 className="u-HiddenDesktop u-P-B--10 u-P-T--5">Yoga</h1>
          <p>
            I learned basic yoga poses as a child and began attending classes as a teenager, initially as a way to stretch after soccer practice. While I gained strength and mobility through these classes, I found that yoga was much more than exercise and began using the things I learned in class to help navigate through the emotional and spiritual obstacles of adolescence. I went to college at MassArt to study painting and developed a process for creating art that gave me the same meditative, therapeutic stimulus. You could find me in my studio practicing asana or immersed in a project, continuing to grow into my own spirit. After graduating, I traveled to India to study yoga. I completed a 200 hr YTT with Siddhi Yoga, as well as an additional course in yoga anatomy with Parimukti Yoga.
          </p>
        </div>
        <div className="u-P-B--10 u-P-L--10 u-P-R--10 u-Col">
          <p>
            I came home and began building a life that would incorporate all of the things that bring me joy. I teach yoga on the South Shore at studios, gyms and schools. My classes focus on creating strength and mobility to practice safely and allow students to prolong their active lifestyles and live their happiest lives. I hope that no matter what they come to class looking for, they leave stronger in body as well as mind and are able to apply these strengths into daily life like I have done.
          </p>
        </div>
      </div>
    </div>
    <div className="u-Flex About-crossfit" id="crossfit">
      <div className="u-HiddenDesktop u-Col u-Relative u-P-L--10">
        <h1 className="About-crossfitMobileTitle">CrossFit</h1>
        <img src={crossfit} className="u-Img" />
      </div>
      <div className="u-P--10 u-Col">
        <h1 className="u-HiddenMobile u-P-B--5">CrossFit</h1>
        <p>
          In 2014 Glen Schleehauf and I met through a mutual friend. He asked me to teach yoga to his CrossFit members at Work/Play CrossFit and become a member myself. I hit it off with the yoga crowd right away, but I was skeptical and honestly intimidated about joining the CrossFit classes. I jumped in and accepted the challenge and started learning the movements. I  fell in love. I enjoyed learning how to use my body to lift weights and move fast.
        </p>
        <p className="u-P-T--5">
          I found a synergy between my yoga practice and commitment to CrossFit that I didn’t expect. Yoga helped me to move and breathe well in a CrossFit WOD, and CrossFit helped me to find a new strength and power.  In 2017 I completed the L1 CrossFit Trainer course and began coaching at Work/Play. I incorporate yoga into my CrossFit classes to promote safe and healthy movement. Check out the video below to learn how you can get started!
        </p>
      </div>
    </div>
    <div className="About-crossfitVideoSection u-Flex u-AlignItemsCenter">
      <div className="u-Col u-P--10">
        <h2 className="u-P-T--5">How do I get Started?</h2>
        <p className="u-M-T--2">Watch the video to learn more on how to get started with Crossfit training.</p>
        <div className="About-videoArrow u-HiddenMobile"><FontAwesomeIcon icon="arrow-circle-right" /></div>
      </div>
      <div className="u-Col">
        <video width="100%" controls poster={videoBg}>
          <source src="http://www.sunshine-after-rain.com/resources/cf_video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);
export default About;