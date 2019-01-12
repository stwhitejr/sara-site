import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import ForSale from "../components/ForSale";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import '../styles/main.scss';

const LOAD_HEADER_THRESHOLD = 200;
const TRANSITION_MS = 1000;


class Page extends Component {
  static propTypes = {

  }

  state = {
    loadHeader: false,
    transitionReady: true,
    tops: {}
  }

  getSectionTops = () => {
    const welcome = document.querySelector('#welcome').offsetTop;
    const yoga = document.querySelector('#yoga').offsetTop;
    const crossfit = document.querySelector('#crossfit').offsetTop;
    const forSale = document.querySelector('#forSale').offsetTop;
    const contact = document.querySelector('#contact').offsetTop;
    this.setState({
      tops: {
        welcome,
        yoga,
        crossfit,
        forSale,
        contact
      }
    })
  }

  componentDidMount() {
    this.getSectionTops();
  }
  // TODO add event listener for window resize to get new section tops
  render() {
    window.addEventListener('scroll', () => {
      if (!this.state.loadHeader && this.state.transitionReady && (document.documentElement.scrollTop >= LOAD_HEADER_THRESHOLD)) {
        console.log('activating header')
        this.setState({loadHeader: true, transitionReady: false}, () => {
          setTimeout(this.setState({transitionReady: true}), TRANSITION_MS)
        })
      } else if (this.state.loadHeader && this.state.transitionReady && (document.documentElement.scrollTop < LOAD_HEADER_THRESHOLD)) {
        console.log('deactivating header')
        this.setState({loadHeader: false, transitionReady: false}, () => {
          setTimeout(this.setState({transitionReady: true}), TRANSITION_MS)
        })
      }
    })
    return (
      <div className="container">
        <Header loadHeader={this.state.loadHeader} tops={this.state.tops} />
        <Intro loadHeader={this.state.loadHeader} />
        <About />
        <ForSale />
        <Footer />
      </div>
    );
  }
}
export default Page;