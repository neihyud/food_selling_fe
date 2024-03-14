import HomeConstant from "../../constant/HomeConstant";

const initState = {
  isOpenCartCheckout: null,
  isOpenFoodDetail: null,
  foodDetail: null
};

const HomeReducer = (state = initState, action) => {
  switch (action.type) {
    case HomeConstant.SET_IS_OPEN_CART_CHECKOUT:
      return {
        ...state,
        isOpenCartCheckout: action.isOpenCartCheckout
      };
    case HomeConstant.SET_IS_OPEN_FOOD_DETAIL:
      return {
        ...state,
        isOpenFoodDetail: action.isOpenFoodDetail
      };
    default:
      return state;
  }
};

export default HomeReducer;
