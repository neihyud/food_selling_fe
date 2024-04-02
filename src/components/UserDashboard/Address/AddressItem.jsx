import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

const AddressItem = (props) => {
	const { handleAction, selected } = props

	// to do: get list address user and TH no have user
	return (
		<div className={'col-md-6'} >
			<div className={`fp__checkout_single_address ${selected ? 'selected' : ''}`} onClick={handleAction}>
				<div className="form-check">
					<p>Name | Phone</p>
					<p>Address</p>
					<p>Area</p>
				</div>
				<ul>
					<li>
						<span className="animation-icon">
							<FontAwesomeIcon
								icon={faEdit} />
						</span>
					</li>
					<li>
						<span className="animation-icon">
							<FontAwesomeIcon icon={faTrashAlt} />
						</span>
					</li>
				</ul>
			</div>
		</div>

	)
}

AddressItem.defaultProps = {
	handleAction: () => {}
}

AddressItem.propTypes = {
	handleAction: PropTypes.func,
	selected: PropTypes.bool
}

export default AddressItem
