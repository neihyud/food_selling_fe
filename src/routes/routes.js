import config from '../config/index'

import About from '../pages/About/About'
import Home from '../pages/Home/Home'
import UserDashboard from '../pages/UserDashboard'

import Checkout from '../components/Checkout'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.jsx'
import Auth from '../pages/Admin/Auth.jsx'

import CategoryManagement from '../components/Admin/ManageProduct/Category/CategoryManagement.jsx'
import Category from '../components/Admin/ManageProduct/Category/index.jsx'
import ProductManagement from '../components/Admin/ManageProduct/Product/ProductManagement.jsx'
import Product from '../components/Admin/ManageProduct/Product/index.jsx'
import AdminDefaultLayout from '../layouts/DefaultLayout/AdminDefaultLayout.jsx'
import Staff from '../components/Admin/Account/Staff/index.jsx'
import StaffManagement from '../components/Admin/Account/Staff/StaffManagement.jsx'
import OrderStatus from '../components/Order/OrderStatus.jsx'
import Login from '../components/Auth/Login.jsx'
import Register from '../components/Auth/Register.jsx'
import ChatBox from '../components/Admin/ChatBox/index.jsx'
import OrderPending from '../components/Admin/Order/OrderPending/index.jsx'
import Order from '../components/Admin/Order/index.jsx'
import MenuFoodPage from '../components/MenuFoodPage/index.jsx'
import OrderDetail from '../components/Admin/Order/OrderDetail.jsx'
import OrderDelivered from '../components/Admin/Order/OrderDelivered/index.jsx'
import OrderDeclined from '../components/Admin/Order/OrderDeclined/index.jsx'
import OrderInProcess from '../components/Admin/Order/OrderInProcess/index.jsx'
import Dashboard from '../components/Admin/Dashboard/Dashboard.jsx'
import Slider from '../components/Admin/Setting/Slider.jsx'
import SliderManagement from '../components/Admin/Setting/SliderManagement.jsx'
import FoodDetail from '../components/FoodDetail/index.jsx'

const { routes } = config

const publicRoutes = [
	{
		path: routes.home,
		component: Home,
		layout: DefaultLayout
	},
	{
		path: routes.about,
		component: About
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
	{
		path: routes.order,
		component: OrderStatus,
		layout: DefaultLayout
	},
	{
		path: routes.login,
		component: Login,
		layout: DefaultLayout
	},
	{
		path: routes.register,
		component: Register,
		layout: DefaultLayout
	}, {
		path: routes.menu,
		component: MenuFoodPage,
		layout: DefaultLayout
	},
	{
		path: routes.foodDetail,
		component: FoodDetail,
		layout: DefaultLayout
	}
]

const privateRoutes = []

const adminPublicRouter = [
	{
		path: routes.admin.auth,
		component: Auth
	},
	{
		path: routes.admin.home,
		component: Dashboard,
		layout: AdminDefaultLayout
	},	
	{
		path: routes.admin.category,
		component: Category,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.categoryEdit,
		component: CategoryManagement,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.categoryCreate,
		component: CategoryManagement,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.product,
		component: Product,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.productEdit,
		component: ProductManagement,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.productCreate,
		component: ProductManagement,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.profile,
		component: Product,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.staff,
		component: Staff,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.staffCreate,
		component: StaffManagement,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.staffEdit,
		component: StaffManagement,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.chat,
		component: ChatBox,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.orderPending,
		component: OrderPending,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.order,
		component: Order,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.orderDetail,
		component: OrderDetail,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.orderInProcess,
		component: OrderInProcess,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.orderDelivered,
		component: OrderDelivered,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.orderDeclined,
		component: OrderDeclined,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.slider,
		component: Slider,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.sliderCreate,
		component: SliderManagement,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.sliderEdit,
		component: SliderManagement,
		layout: AdminDefaultLayout
	}
]

export { adminPublicRouter, privateRoutes, publicRoutes }

