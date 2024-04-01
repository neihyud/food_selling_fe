import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddressItem = () => {
	// to do: get list address user and TH no have user
	return (
		<div className="col-md-6">
			<div className="fp__checkout_single_address">
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

export default AddressItem
