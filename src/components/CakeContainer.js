import React from 'react';
import { connect } from 'react-redux';
import { buyCake, addCake } from '../Redux';
function CakeContainer(props) {
  return (
    <div>
      <h1>
        No of Cakes at {props.name} :- {props.numOfCakes}
      </h1>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.addCake}>Add Cake</button>
    </div>
  );
}

// state from reduc store map to componets props
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    name: state.cake.shopeName,
  };
};

// map dispatch actions props to componets get methods which pass to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
