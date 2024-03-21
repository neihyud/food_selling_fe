import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import DashboardAction from '../../../redux/action/DashboardAction'

const MenuItem = ({ icon, name, type }) => {
	const dispatch = useDispatch()

	const handleChangeComponent = () => {
		dispatch(DashboardAction.setTypeContentComponent(type))
	}

	return (
		<>
			<button className="nav-link" onClick={handleChangeComponent}>
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
	name: PropTypes.string,
	type: PropTypes.string
}

export default MenuItem
