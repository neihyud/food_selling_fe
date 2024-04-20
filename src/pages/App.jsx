import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout'
import { Fragment, useEffect } from 'react'
import { publicRoutes, adminPublicRouter } from '../routes'
import NotFound from './NotFound/NotFound'
import AdminDefaultLayout from '../layouts/DefaultLayout/AdminDefaultLayout'
import LIST_MENU from '../config/admin/menu'
import PageAction from '../redux/action/admin/PageAction'
import { useDispatch } from 'react-redux'
import ProtectedRoute from './ProtectRouter'
import ProtectedRouteAdmin from './ProtectRouterAdmin'

function App() {
	const dispatch = useDispatch()

	function findPathByKey(listMenu, targetPath, currentPath = []) {
		for (const item of listMenu) {
			if (item.path === targetPath) {
				return currentPath.concat(item.key)
			} else 
				if (item.children) {
					const foundPath = findPathByKey(item.children, targetPath, currentPath.concat(item.key))
					if (foundPath) {
						return foundPath
					}
				}  
		}
		return null
	}
	useEffect(() => {

		const currentPath = window.location.pathname

		const keyPath = findPathByKey(LIST_MENU, currentPath, [])

		if (keyPath) {
			dispatch(PageAction.setKeyPathMenu([...keyPath]))
		}

	}, [])
	
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
						<ProtectedRoute 
							path={route.path} 
							element={
								<Layout>
									<Page />
								</Layout>
							} 
						/>
						
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
						<ProtectedRouteAdmin 
							path={route.path} 
							element={
								<Layout>
									<Page />
								</Layout>
							} 
						/>
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
