import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={props.buyItem}>Add</button>
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
