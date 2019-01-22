import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Intro from '../components/Intro';
import About from '../components/About';
import ForSale from '../components/ForSale';
import Schedule from '../components/Schedule';
import Footer from "../components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowCircleRight, faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../styles/main.scss';

const LOAD_HEADER_THRESHOLD = 50;
const TRANSITION_MS = 1000;
library.add([faBars, faFacebookF, faInstagram, faArrowCircleRight, faPlusSquare, faMinusSquare]);

class Page extends Component {
  static propTypes = {

  }

  state = {
    loadHeader: false,
    transitionReady: true,
    tops: {},
    isActive: false,
    yogaIsActive: false
  }

  getSectionTops = () => {
    const welcome = document.querySelector('#welcome').offsetTop;
    const yoga = document.querySelector('#yoga').offsetTop;
    const crossfit = document.querySelector('#crossfit').offsetTop;
    const forSale = document.querySelector('#forSale').offsetTop;
    const schedule = document.querySelector('#schedule').offsetTop;
    const contact = document.querySelector('#contact').offsetTop;
    this.setState({
      tops: {
        welcome,
        yoga,
        crossfit,
        forSale,
        schedule,
        contact
      }
    })
  }

  componentDidMount() {
    this.getSectionTops();
    setTimeout(() => this.setState({isActive: true}), 1000);
  }
  render() {
    window.addEventListener('resize', this.getSectionTops);
    window.addEventListener('scroll', () => {
      const docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const docScrollBottom = docScrollTop + (document.documentElement.offsetHeight || document.body.offsetHeight);
      // Set header active state
      if (!this.state.loadHeader && this.state.transitionReady && (docScrollTop >= LOAD_HEADER_THRESHOLD)) {
        this.setState({loadHeader: true, transitionReady: false}, () => {
          setTimeout(this.setState({transitionReady: true}), TRANSITION_MS)
        })
      } else if (this.state.loadHeader && this.state.transitionReady && (docScrollTop < LOAD_HEADER_THRESHOLD)) {
        this.setState({loadHeader: false, transitionReady: false}, () => {
          setTimeout(this.setState({transitionReady: true}), TRANSITION_MS)
        })
      }
      // Set section active state
      const yogaSectionTop = document.querySelector('#yoga').offsetTop;
      const yogaSectionBottom = yogaSectionTop + document.querySelector('#yoga').offsetHeight + 300;
      if (docScrollBottom >= yogaSectionTop && docScrollBottom <= yogaSectionBottom && !this.state.yogaIsActive) {
        this.setState({yogaIsActive: true});
      } else if ((docScrollBottom < yogaSectionTop || docScrollBottom > yogaSectionBottom) && this.state.yogaIsActive) {
        this.setState({yogaIsActive: false});
      }
    })
    return (
      <div className="container">
        <Header loadHeader={this.state.loadHeader} tops={this.state.tops} />
        <Intro loadHeader={this.state.loadHeader} isActive={this.state.isActive} />
        <About isActive={this.state.yogaIsActive} />
        <ForSale />
        <Schedule />
        <Footer />
      </div>
    );
  }
}
export default Page;