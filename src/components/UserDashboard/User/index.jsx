import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './user.css'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import EditUser from './EditUser'

const User = () => {
	const defaultUser = () => {
		return (
			<div className="fp_dash_personal_info">
				<h4>Personal Information
					<a className="dash_info_btn">
						<span className="edit">edit</span>
						<span className="cancel">cancel</span>
					</a>
				</h4>

				<div className="personal_info_text">
					<p><span>Name:</span> a</p>
					<p><span>Email:</span> a@gmail.com</p>
					<p><span>Phone:</span> 0123456789</p>
					<p><span>Address:</span> Xuan Thuy</p>
				</div>
			</div>
		)
	}

	// to do
	const getPersonalInfo = () => {
		switch (true) {
			case false:
				return <EditUser />
			default:
				return defaultUser()
		}
	}

	return (
		<div className="fp__dashboard_content">
			<div className="tab-content" >

				<div className="tab-pane show active" >
					<div className="fp_dashboard_body">
						<h3>Welcome to your Profile</h3>

						<div className="fp__dashboard_overview">
							<div className="row">
								<div className="col-xl-4 col-sm-6 col-md-4">
									<div className="fp__dashboard_overview_item">
										<span className="icon">
											<FontAwesomeIcon icon={faShoppingBasket} />
										</span>
										<h4>total order <span>(50)</span></h4>
									</div>
								</div>
								<div className="col-xl-4 col-sm-6 col-md-4">
									<div className="fp__dashboard_overview_item green">
										<span className="icon">
											<FontAwesomeIcon icon={faShoppingBasket} />

										</span>
										<h4>Completed <span>(50)</span></h4>
									</div>
								</div>
								<div className="col-xl-4 col-sm-6 col-md-4">
									<div className="fp__dashboard_overview_item red">
										<span className="icon">
											<FontAwesomeIcon icon={faShoppingBasket} />
										</span>
										<h4>cancel <span>(50)</span></h4>
									</div>
								</div>
							</div>
						</div>

						{getPersonalInfo()}

					</div>
				</div>
			</div>
		</div>
	)
}

export default User
