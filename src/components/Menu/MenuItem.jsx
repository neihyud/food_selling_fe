import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const MenuItem = ({ title, to }) => {
	return (
		<li className='nav-item'>
			<NavLink to={to} className="nav-link">
				<span>{title}</span>
			</NavLink>
		</li>
	)
}

MenuItem.propTypes = {
	title: PropTypes.string,
	to: PropTypes.string,
}

export default MenuItem
