const initState = {
  test: null
};

const testReducer = (state = initState, action) => {
  switch (action.type) {
    case "test":
      return { ...initState };
    default:
      return state;
  }
};

export default testReducer;
