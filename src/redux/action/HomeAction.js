import HomeConstant from "../../constant/HomeConstant";

const HomeAction = {
  setIsOpenCartCheckout(isOpenCartCheckout) {
    return {
      type: HomeConstant.SET_IS_OPEN_CART_CHECKOUT,
      isOpenCartCheckout
    };
  },
  
  setIsOpenFoodDetail(isOpenFoodDetail) {
    return {
      type: HomeConstant.SET_IS_OPEN_FOOD_DETAIL,
      isOpenFoodDetail
    };
  }
};

export default HomeAction;
