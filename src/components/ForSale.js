import React from 'react';
import PropTypes from 'prop-types';
import candles from '../images/candles.jpg'
import necklaces from '../images/necklaces.jpg'
import bracelets from '../images/bracelets.jpg'

const ForSale = props => (
  <section className="ForSale" id="forSale">
    <div className="u-P--10">
      <h1>Hand-Made Goods</h1>
      <p className="u-P-T--5">
        As I mentioned before, creating can be a meditative practice. Lately I have been creating goods that will also improve your quality of life. I create soy candles made with blends of natural essential oils to fill your home with therapeutic scents. Contact me for bulk orders or visit Blend Nutrition in So Weymouth, or Unplug & Be Mindful in Marshfield to purchase!
      </p>
    </div>
    <div className="u-JustifyContentCenter u-Flex">
      <a href="mailto:sara@sunshine-after-rain.com" className="ForSale-button u-MobileFullWidth">sara@sunshine-after-rain.com</a>
    </div>
    <div className="u-Flex u-AlignItemsCenter">
      <div className="u-P--10 u-Center">
        <h3 className="u-P-B--5">Soy Candles</h3>
        <img src={candles} className="u-Img" />
      </div>
      <div className="u-P--10 u-Center">
        <h3 className="u-P-B--5">Mala Necklaces</h3>
        <img src={necklaces} className="u-Img" />
      </div>
      <div className="u-P--10 u-Center">
        <h3 className="u-P-B--5">Energy Bracelets</h3>
        <img src={bracelets} className="u-Img" />
      </div>
    </div>
  </section>
);
export default ForSale;