import Navbar from './Menu'
import User from './User'
import Address from './Address'
import Order from './Order'
import ChangePassword from './ChangePassword'
import DashboardConstant from '../../constant/DashboardConstant'
import { useSelector } from 'react-redux'
import Message from './Message'

const Dashboard = () => {
	const { typeContentComponent } = useSelector((state) => state.dashboardReducer)
	
	const renderContent = () => {
		switch (typeContentComponent) {
			case DashboardConstant.TYPE_CONTENT_COMPONENT.USER:
				return (<User />)
			case DashboardConstant.TYPE_CONTENT_COMPONENT.ORDER:
				return <Order />
			case DashboardConstant.TYPE_CONTENT_COMPONENT.CHANGE_PASSWORD:
				return <ChangePassword />
			case DashboardConstant.TYPE_CONTENT_COMPONENT.ADDRESS:
				return <Address />
			case DashboardConstant.TYPE_CONTENT_COMPONENT.MESSAGE:
				return <Message />
			default:
				return <User />
		}
	}
  
	return (
		<section className="fp__dashboard">
			<div className="container h-100">
				<div className="fp__dashboard_area h-100">
					<div className="row h-100">
						<div className="col-xl-3 col-lg-4 wow fadeInUp" data-wow-duration="1s">
							<Navbar />
						</div>
						<div className="col-xl-9 col-lg-8 wow fadeInUp" data-wow-duration="1s">
							<div className="fp__dashboard_content">
								<div className="tab-pane" >
									{renderContent()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Dashboard
