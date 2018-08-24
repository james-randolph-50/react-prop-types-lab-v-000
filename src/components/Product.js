import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  
  render() {
    return (
      <div>Product</div>
      )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

