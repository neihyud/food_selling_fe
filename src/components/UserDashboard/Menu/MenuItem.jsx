import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import DashboardAction from '../../../redux/action/DashboardAction'

const MenuItem = ({ icon, name, type }) => {
	const { typeContentComponent } = useSelector((state) => state.dashboardReducer)

	const dispatch = useDispatch()

	const handleChangeComponent = () => {
		dispatch(DashboardAction.setTypeContentComponent(type))
	}

	const isActive = typeContentComponent === type

	return (
		<>
			<button className={`nav-link ${isActive ? 'nav-active' : ''}`} onClick={handleChangeComponent}>
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
