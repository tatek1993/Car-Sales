import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from "../Actions/carSaleActions";

const AddedFeature = props => {

  const toggleRemoved = e => {
    console.log("hi", props.feature.name);
    props.removeFeature(props.feature.id)
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={toggleRemoved} key={props.feature.id}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  {removeFeature}
  )(AddedFeature);
