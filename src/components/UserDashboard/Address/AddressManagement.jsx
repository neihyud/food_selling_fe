import PropTypes from 'prop-types'

const AddressManagement = ({ type }) => {

	let title = null
	let titleBtnAction = null

	switch (type) {
		case 'add':
			title = 'add address'
			titleBtnAction = 'update address'
			break
		case 'edit':
			title = 'edit address'
			titleBtnAction = 'save address'
	}

	return (
		<div className="fp__address_modal">
			<div className="modal fade">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5">{title}</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="row">
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="text" placeholder="First Name" />
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="text" placeholder="Last Name" />
										</div>
									</div>
									<div className="col-md-12 col-lg-12 col-xl-12">
										<div className="fp__check_single_form">
											<input type="text" placeholder="Company Name (Optional)" />
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<select >
												<option value="">select country</option>
												<option value="">bangladesh</option>
												<option value="">nepal</option>
												<option value="">japan</option>
												<option value="">korea</option>
												<option value="">thailand</option>
											</select>
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="text" placeholder="Street Address *" />
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="text"
												placeholder="Apartment, suite, unit, etc. (optional)" />
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="text" placeholder="Town / City *" />
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="text" placeholder="State *" />
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="text" placeholder="Zip *" />
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="text" placeholder="Phone *" />
										</div>
									</div>
									<div className="col-md-6 col-lg-12 col-xl-6">
										<div className="fp__check_single_form">
											<input type="email" placeholder="Email *" />
										</div>
									</div>
									<div className="col-md-12 col-lg-12 col-xl-12">
										<div className="fp__check_single_form">
											<h5>Additional Information</h5>
											<textarea cols="3" rows="4"
												placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
										</div>
									</div>
									<div className="col-12">
										<div className="fp__check_single_form m-0">
											<button type="submit" className="common_btn">{titleBtnAction}</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

AddressManagement.propTypes = {
	type: PropTypes.string
}

export default AddressManagement
