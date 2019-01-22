import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

  state = {
    activeNav: '',
    mobileNavActive: false
  }

  handleClick = () => this.setState({mobileNavActive: !this.state.mobileNavActive})

  render() {
    // Activate navigation items based on scroll top
    window.addEventListener('scroll', () => {
      const docElemScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const docElemHeight = document.documentElement.offsetHeight || document.body.offsetHeight;
      const docElemScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const docScrollTop = docElemScrollTop + document.querySelector('.Header').offsetHeight + 20;
      const tops = Object.keys(this.props.tops);
      tops.forEach((key, i) => {
        const sectionTopPosition = this.props.tops[key];
        const nextSectionTopPosition = this.props.tops[tops[i + 1]];
        const lastKey = tops[tops.length - 1];
        // Bottom override
        if (docElemScrollTop + docElemHeight === docElemScrollHeight) {
          if (key === lastKey && this.state.activeNav !== lastKey) {
            this.setState({activeNav: key})
          }
        } else if (docScrollTop >= sectionTopPosition && docScrollTop < nextSectionTopPosition && this.state.activeNav !== key) {
          this.setState({activeNav: key})
        }
      })
    });
    return (
      <header className={`Header ${this.props.loadHeader ? 'Header--active' : ''}`}>
        <button className="Header-mobileNav" onClick={this.handleClick}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <h3>sunshine <span className="Header-logoAfter">after</span> rain</h3>
        <nav className={`Header-nav ${this.state.mobileNavActive ? 'Header-nav--active' : ''}`}>
          <a className={`Header-navItem ${this.state.activeNav === 'welcome' ? 'Header-navItem--active' : ''}`} href="#welcome">welcome</a>
          <a className={`Header-navItem ${this.state.activeNav === 'yoga' ? 'Header-navItem--active' : ''}`} href="#yoga">yoga</a>
          <a className={`Header-navItem ${this.state.activeNav === 'crossfit' ? 'Header-navItem--active' : ''}`} href="#crossfit">crossfit</a>
          <a className={`Header-navItem ${this.state.activeNav === 'forSale' ? 'Header-navItem--active' : ''}`} href="#forSale">for sale</a>
          <a className={`Header-navItem ${this.state.activeNav === 'schedule' ? 'Header-navItem--active' : ''}`} href="#schedule">schedule</a>
          <a className={`Header-navItem ${this.state.activeNav === 'contact' ? 'Header-navItem--active' : ''}`} href="#contact">contact</a>
        </nav>
      </header>
    )
  }
};
export default Header;