import React from "react";
import PropTypes from "prop-types";

const ForSale = props => (
  <section className="ForSale" id="forSale">
    <div className="u-P-L--10 u-P-R--10 u-P-T--10">
      <h1>Hand-Made Goods</h1>
      <p>
        As I mentioned before, creating can be a meditative practice. Lately I have been creating goods that will also improve your quality of life. I create soy candles made with blends of natural essential oils to fill your home with therapeutic scents. Contact me for bulk orders or visit Blend Nutrition in So Weymouth, or Unplug & Be Mindful in Marshfield to purchase!
      </p>
    </div>
    <div className="u-Flex u-AlignItemsCenter">
      <div className="u-P-T--10 u-P-L--10 u-P-R--10 u-Center">
        <h2 className="u-P-B--3">Item</h2>
        <img src="http://localhost:8080/src/images/crossfit.jpg" className="u-Img" />
      </div>
      <div className="u-P-T--10 u-P-L--10 u-P-R--10 u-Center">
        <h2 className="u-P-B--3">Item</h2>
        <img src="http://localhost:8080/src/images/crossfit.jpg" className="u-Img" />
      </div>
      <div className="u-P-T--10 u-P-L--10 u-P-R--10 u-Center">
        <h2 className="u-P-B--3">Item</h2>
        <img src="http://localhost:8080/src/images/crossfit.jpg" className="u-Img" />
      </div>
    </div>
    <div className="u-JustifyContentCenter u-P--10 u-Flex">
      <a href="phone:1111" className="u-Button u-M-R--5 u-NoMobileMargin u-MobileFullWidth">Phone: 111111</a>
      <a href="mailto:1111" className="u-Button u-MobileFullWidth">Email: 111111</a>
    </div>
  </section>
);
export default ForSale;