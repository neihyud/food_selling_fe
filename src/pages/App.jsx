import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout'
import { Fragment } from 'react'
import { publicRoutes, adminPublicRouter } from '../routes'
import NotFound from './NotFound/NotFound'
import AdminDefaultLayout from '../layouts/DefaultLayout/AdminDefaultLayout'

function App() {
	const renderPublicRoute = () => {
		return publicRoutes.map((route, index) => {
			const Page = route.component
			let Layout = DefaultLayout

			if (route.layout) {
				Layout = route.layout
			} else {
				Layout = Fragment
			}
			return (
				<Route
					key={index}
					path={route.path}
					element={
						<Layout>
							<Page />
						</Layout>
					}
				/>
			)
		})
	}

	const renderAdminPublicRoute = () => {
		return adminPublicRouter.map((route, index) => {
			const Page = route.component
			let Layout = AdminDefaultLayout

			if (route.layout) {
				Layout = route.layout
			} else {
				Layout = Fragment
			}
			return (
				<Route
					key={index}
					path={route.path}
					element={
						<Layout>
							<Page />
						</Layout>
					}
				/>
			)
		})
	}

	return (
		<>
			<Router>
				<Routes>
					<Route path="/admin">
						{renderAdminPublicRoute()}
						<Route path="*" element={<NotFound/>} />
					</Route>
					{renderPublicRoute()}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
