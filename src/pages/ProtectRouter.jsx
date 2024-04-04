import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import LocalStorageService from '../services/LocalStorageService'

const ProtectedRoute = ({ element, path }) => {
	const token = LocalStorageService.getToken()

	const pathRestrict = ['checkout']

	const pathRestrict2 = ['login', 'register']
	if (!token && pathRestrict.includes(path)) {
		return <Navigate to="/login" />
	}

	if (token && pathRestrict2.includes(path)) {
		return <Navigate to="/" />
	}

	return element
}

ProtectedRoute.propTypes = {
	path: PropTypes.string,
	element: PropTypes.element
}

export default ProtectedRoute
