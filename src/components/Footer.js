import React from "react";
import PropTypes from "prop-types";

const Footer = props => (
  <footer className="Footer" id="contact">
    <div className="u-Center u-P--5 u-Flex u-JustifyContentCenter u-AlignItemsCenter">
      <h2 className="u-M-R--5">Follow Me!</h2>
      <img src="icon" />
      <img src="icon" />
    </div>
    <div className="u-Center u-P--5 u-Flex u-JustifyContentCenter u-AlignItemsCenter">
      <h2 className="u-M-R--5">Contact Me!</h2>
      Phone: 11111 &nbsp;&nbsp;-&nbsp;&nbsp; Email: 11111
    </div>
  </footer>
);
export default Footer;