import Navbar from './Menu'
import User from './User'
import Address from './Address'
import Order from './Order'
import ChangePassword from './ChangePassword'

const Dashboard = () => {
	const type = 'change password'
	const renderContent = () => {
		switch (type) {
			case 'user':
				return <User />
			case 'order':
				return <Order />
			case 'change password':
				return <ChangePassword />
			default:
				return <Address />
		}
	}
  
	return (
		<section className="fp__dashboard">
			<div className="container">
				<div className="fp__dashboard_area">
					<div className="row">
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
