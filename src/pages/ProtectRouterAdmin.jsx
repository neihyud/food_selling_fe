import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import LocalStorageService from '../services/LocalStorageService'

const ProtectedRouteAdmin = ({ element, path }) => {
	const token = LocalStorageService.getTokenAdmin()

	const pathRestrict2 = ['login', 'register']
	if (!token && !pathRestrict2.includes(path)) {
		return <Navigate to="/admin/login" />
	}

	if (token && pathRestrict2.includes(path)) {
		if (LocalStorageService.getInfoStaffStore().role === 'admin') {
			return <Navigate to="/admin" />
		} 
		
		return <Navigate to="/admin/order/pending" />
	}

	return element
}

ProtectedRouteAdmin.propTypes = {
	path: PropTypes.string,
	element: PropTypes.element
}

export default ProtectedRouteAdmin
