import { BUY_CAKE, ADD_CAKE } from './cakeType';

const initialstate = {
  numOfCakes: 10,
  shopeName: 'Bunny Cakes',
};

const cakeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
