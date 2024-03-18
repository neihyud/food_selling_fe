import config from '../config/index'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Cart from '../pages/Cart'
import UserDashboard from '../pages/UserDashboard'

import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.jsx'
import Checkout from '../components/Checkout'
import LoginAdmin from '../pages/Admin/Auth/Login'

const { routes } = config

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
	},
]

const privateRoutes = []

const adminPublicRouter = [
	{
		path: routes.admin.login,
		component: LoginAdmin,
	},
]

export { publicRoutes, privateRoutes, adminPublicRouter }
