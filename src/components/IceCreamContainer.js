import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../Redux';
function IceCreamContainer(props) {
  return (
    <div>
      <h1>No of Ice Cream :- {props.numOfIceCream}</h1>
      <button onClick={props.buyIce}>Buy Ice-Cream</button>
      {/* <button onClick={props.addCake}>Add Cake</button> */}
    </div>
  );
}

// state from reduc store map to componets props
const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

// map dispatch actions props to componets get methods which pass to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyIce: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
