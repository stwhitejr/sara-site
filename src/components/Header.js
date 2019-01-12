import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {

  state = {
    activeNav: ''
  }

  render() {
    // Activate navigation items based on scroll top

    // TODO Get this to be more accurate
    window.addEventListener('scroll', () => {
      const tops = Object.keys(this.props.tops);
      tops.forEach((key, i) => {
        const bottomThreshold = i === (tops.length - 1) ? document.body.scrollHeight : this.props.tops[tops[i + 1]] + document.querySelector('.Header').offsetHeight;
        const sectionTopPosition = this.props.tops[key] + document.querySelector('.Header').offsetHeight;
        const documentTopPosition = document.documentElement.scrollTop + document.querySelector('.Header').offsetHeight;
        // If first top is gt= to doc sroll top and the next top is still larger than doc scroll top and we're not already active on this top key
        if (documentTopPosition >= sectionTopPosition && documentTopPosition < bottomThreshold && this.state.activeNav !== key) {
          // Bottom of document override
          if (document.body.scrollHeight === (document.documentElement.scrollTop + document.body.offsetHeight)) {
            this.setState({activeNav: tops[tops.length - 1]})
          } else {
            this.setState({activeNav: key})
          }
        }
      })
    });
    return (
      <header className={`Header u-Flex ${this.props.loadHeader ? 'Header--active' : ''}`}>
        <h3>sunshine after rain</h3>
        <nav className="Header-nav">
          <a className={`Header-navItem ${this.state.activeNav === 'welcome' ? 'Header-navItem--active' : ''}`} href="#welcome">welcome</a>
          <a className={`Header-navItem ${this.state.activeNav === 'yoga' ? 'Header-navItem--active' : ''}`} href="#yoga">yoga</a>
          <a className={`Header-navItem ${this.state.activeNav === 'crossfit' ? 'Header-navItem--active' : ''}`} href="#crossfit">crossfit</a>
          <a className={`Header-navItem ${this.state.activeNav === 'forSale' ? 'Header-navItem--active' : ''}`} href="#forSale">for sale</a>
          {/*<a className={`Header-navItem ${this.state.activeNav === 'schedule' ? 'Header-navItem--active' : ''}`} href="#schedule">schedule</a>*/}
          <a className={`Header-navItem ${this.state.activeNav === 'contact' ? 'Header-navItem--active' : ''}`} href="#contact">contact</a>
        </nav>
      </header>
    )
  }
};
export default Header;