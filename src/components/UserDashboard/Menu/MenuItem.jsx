import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const MenuItem = ({ icon, name }) => {
	return (
		<>
			<button className="nav-link" >
				<span>
					<FontAwesomeIcon icon={icon} />
				</span>
				{name}
			</button>
		</>
	)
}

MenuItem.propTypes = {
	icon: PropTypes.object,
	name: PropTypes.string
}

export default MenuItem
