import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './user.css'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import EditUser from './EditUser'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import DashboardAction from '../../../redux/action/DashboardAction'
import { createAxiosJwt } from '../../../../createInstance'
import PropTypes from 'prop-types'

const DefaultUser = ({ children, handleActionChange, isEdit }) => {
	return (
		<div className="fp_dash_personal_info" style={{ overflow: 'auto' }}>
			<h4>Personal Information
				<button className="dash_info_btn common_btn" onClick={handleActionChange}>
					
					<span style={{ color: 'white' }}>
						{isEdit ? 'cancel' : 'edit' }
					</span>
				</button>
			</h4>
			{children}
		</div>
	)
}

const User = () => {
	const axiosJwt = createAxiosJwt()
	const dispatch = useDispatch()

	const { infoUser, isEdit } = useSelector((state) => state.dashboardReducer)

	const [infoUserStatus, setInfoUserStatus] = useState()

	const getInfoUserStatus = async () => {
		const response = await axiosJwt.get('/order/info-status-order-user')

		setInfoUserStatus(response?.data)
	}

	useEffect(() => {
		dispatch(DashboardAction.getInfoUser(axiosJwt))
		getInfoUserStatus()
	}, [])

	const handleActionChange = () => { 
		dispatch(DashboardAction.setIsEdit(!isEdit))
	}

	// to do
	const getPersonalInfo = () => {
		switch (true) {
			case !!isEdit:
				return (
					<DefaultUser handleActionChange={handleActionChange} isEdit={isEdit}>
						<EditUser user={infoUser}/>
					</DefaultUser>
				)
			default:
				return (
					<DefaultUser handleActionChange={handleActionChange} isEdit={isEdit}>
						<div className="personal_info_text">
							<p><span>Name:</span> {infoUser?.name}</p>
							<p><span>Email:</span> {infoUser?.email ? infoUser.email : '<empty>'}</p>
						</div>
					</DefaultUser>
				)
		}
	}

	return (
		<div className="fp__dashboard_content">
			<div className="tab-content" >

				<div className="tab-pane show active" >
					<div className="fp_dashboard_body" style={{ }}>
						<h3>Welcome to your Profile</h3>

						<div className="fp__dashboard_overview" >
							<div className="row">
								{/* <div className="col-xl-3">
									<div className="fp__dashboard_overview_item">
										<span className="icon">
											<FontAwesomeIcon icon={faShoppingBasket} />
										</span>
										<h4>total order <span>{infoUserStatus?.orderCount}</span></h4>
									</div>
								</div> */}
								<div className="col-xl-3">
									<div className="fp__dashboard_overview_item green">
										<span className="icon">
											<FontAwesomeIcon icon={faShoppingBasket} />

										</span>
										<h4>Completed <span>{infoUserStatus?.orderCountSuccess}</span></h4>
									</div>
								</div>
								
								<div className="col-xl-3">
									<div className="fp__dashboard_overview_item red">
										<span className="icon">
											<FontAwesomeIcon icon={faShoppingBasket} />
										</span>
										<h4>cancel <span>{infoUserStatus?.orderCountDeclined}</span></h4>
									</div>
								</div>
								<div className="col-xl-3">
									<div className="fp__dashboard_overview_item yellow">
										<span className="icon">
											<FontAwesomeIcon icon={faShoppingBasket} />
										</span>
										<h4>pending <span>{infoUserStatus?.orderCountDeclined}</span></h4>
									</div>
								</div>
								<div className="col-xl-3">
									<div className="fp__dashboard_overview_item blue">
										<span className="icon">
											<FontAwesomeIcon icon={faShoppingBasket} />
										</span>
										<h4>in process <span>{infoUserStatus?.orderCountDeclined}</span></h4>
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

DefaultUser.propTypes = {
	children: PropTypes.node,
	handleActionChange: PropTypes.func,
	isEdit: PropTypes.bool
}

export default User
