import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures.map(item => {
      // const boughtItem = state.additionalFeatures.filter(item => item.id === action.payload)[0]
      if (state.car.features.filter(feature => feature.id === item.id).length>0) {
        return {
          ...item,
          disabled: true
        } 
          
      }
      return {
        ...item,
        disabled: false
      } 
    })
  }
}

export default connect(
  mapStateToProps,
  {}
  )(AdditionalFeatures);
