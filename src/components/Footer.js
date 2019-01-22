import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = props => (
  <footer className="Footer" id="contact">
    <section className="Footer-social">
      <h2 className="u-M-B--3">Follow Me</h2>
      <a href="https://www.facebook.com/sara.greenlaw" target="_blank" className="Footer-socialButton"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
      <a href="https://www.instagram.com/sparklegoblin/" target="_blank" className="Footer-socialButton"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
    </section>
    <section className="Footer-contact">
      <h2 className="u-M-B--3">Contact Me</h2>
      <a href="mailto:sara@sunshine-after-rain.com" className="Footer-contactInfo">sara@sunshine-after-rain.com</a>
    </section>
  </footer>
);
export default Footer;