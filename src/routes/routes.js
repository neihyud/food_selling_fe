import config from "../config/index";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Cart from "../pages/Cart";
import UserDashboard from "../pages/UserDashboard";

import Checkout from "../components/Checkout";

const { routes } = config;

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
    layout: DefaultLayout
  },
  {
    path: routes.about,
    component: About,
  },
  {
    path: routes.cart,
    component: Cart,
    layout: DefaultLayout
  }, 
  {
    path: routes.dashboard,
    component: UserDashboard,
    layout: DefaultLayout
  },
  {
    path: routes.checkout,
    component: Checkout,
    layout: DefaultLayout
  }

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
