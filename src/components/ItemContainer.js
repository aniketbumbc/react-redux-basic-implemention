import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream, buyCake } from '../Redux';
function ItemContainer(props) {
  console.log(props.item);
  return (
    <div>
      <h2> Items - {props.item}</h2>
      <button onClick={props.buItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buItem: itemDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
