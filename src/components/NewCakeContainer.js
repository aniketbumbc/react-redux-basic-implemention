import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake, addCake } from '../Redux';
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>
        No of Cakes at {props.name} :- {props.numOfCakes}
      </h1>
      <button onClick={() => props.buyCake(number)}>Buy Cake{number}</button>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
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
    buyCake: (number) => dispatch(buyCake(number)),
    addCake: () => dispatch(addCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
