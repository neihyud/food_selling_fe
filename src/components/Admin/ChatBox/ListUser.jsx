import React from 'react'
import DashboardConstant from '../../../constant/DashboardConstant'

const ListUser = (props) => {
	const { listUser } = props

	const renderListUser = listUser?.map((user, index) => {
		return (
			<li className="media" key={index}>
				<img src={DashboardConstant.IMG_USER_DEFAULT} alt="person" className="img-fluid w-100" />
				<div className="media-body">
					<div className="mt-0 mb-1 font-weight-bold">Hasan Basri</div>
					<div className="text-success text-small font-600-bold"><i className="fas fa-circle"></i> Online</div>
				</div>
			</li>
		)
	})
	return (
		<>{renderListUser()}</>

	)
}

export default ListUser
