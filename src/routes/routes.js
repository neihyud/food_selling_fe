import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import config from '../config/index';

const {routes} = config

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.about,
    component: About,
  }
]

const privateRoutes = [];

export { publicRoutes, privateRoutes };
