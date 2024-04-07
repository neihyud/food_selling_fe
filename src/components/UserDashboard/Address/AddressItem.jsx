import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

const AddressItem = (props) => {
	const { handleAction, selected, last_name, first_name, phone, address, handleActon } = props
	// to do: get list address user and TH no have user
	return (
		<div className={'col-md-6'} >
			<div className={`fp__checkout_single_address ${selected ? 'selected' : ''}`} onClick={handleAction}>
				<div className="form-check">
					<p>{`${first_name} ${last_name}`}</p>
					<p>{phone}</p>
					<p>{address}</p>
				</div>
				<ul>
					<li>
						<span className="animation-icon">
							<FontAwesomeIcon
								icon={faEdit} 
								onClick={() => handleActon('edit')}
							/>
						</span>
					</li>
					<li>
						<span className="animation-icon">
							<FontAwesomeIcon icon={faTrashAlt} 
								onClick={() => handleActon('remove')}
							/>
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
	selected: PropTypes.bool,
	last_name: PropTypes.string, 
	first_name: PropTypes.string, 
	phone: PropTypes.string, 
	address: PropTypes.string,
	handleActon: PropTypes.func
}

export default AddressItem
