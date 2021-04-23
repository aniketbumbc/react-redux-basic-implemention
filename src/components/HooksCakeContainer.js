import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../Redux';

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3> Num of Cakes {numOfCakes}</h3>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
