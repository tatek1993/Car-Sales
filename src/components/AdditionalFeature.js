import React from 'react';
import { connect } from 'react-redux';

import {buyItem} from '../Actions/carSaleActions';




const AdditionalFeature = props => {

  const toggleBought = e => {
    props.buyItem(props.feature.id)
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" disabled={props.feature.disabled} key={props.feature.id} onClick={toggleBought}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    
  }
}

// const connectComponentToRedux = connect(
//   mapStateToProps,
//   {buyItem}
// );
// // connectComponentToRedux is a function
// export default connectComponentToRedux(AdditionalFeature);

export default connect(
  mapStateToProps,
  {buyItem}
)(AdditionalFeature);
