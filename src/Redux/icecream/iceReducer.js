const { BUY_ICECREAM } = require('./iceTypes');

const initialState = {
  numOfIceCream: 30,
};

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceReducer;
