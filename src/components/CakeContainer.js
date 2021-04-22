import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../Redux';
function CakeContainer(props) {
  return (
    <div>
      <h1> No of Cakes :- {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// state from reduc store map to componets props
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// map dispatch actions props to componets
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
