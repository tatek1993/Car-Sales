import React from 'react';
import { connect } from 'react-redux';



const Total = props => {
  // console.log('this props', props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  const reducer = (accumulator, currentValue) => {
    console.log(' accumulator and current value', accumulator, currentValue.price);
    return (accumulator + currentValue.price)
  };
  console.log('total state', state.car.features);
  return {
    additionalPrice: state.car.features.reduce(reducer, 0)
  }
}

export default connect(
  mapStateToProps,
  {}
  )(Total);
