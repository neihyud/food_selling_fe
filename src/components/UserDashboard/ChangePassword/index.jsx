import './changePassword.css'

const ChangePassword = () => {
	return (
		<div className="fp_dashboard_body fp__change_password">
			<div className="fp__review_input">
				<h3>change password</h3>
				<div className="comment_input pt-0">
					<form>
						<div className="row">
							<div className="col-xl-6">
								<div className="fp__comment_input_single">
									<label>Current Password</label>
									<input type="password" placeholder="Current Password" />
								</div>
							</div>
							<div className="col-xl-6">
								<div className="fp__comment_input_single">
									<label>New Password</label>
									<input type="password" placeholder="New Password" />
								</div>
							</div>
							<div className="col-xl-12">
								<div className="fp__comment_input_single">
									<label>Confirm Password</label>
									<input type="password" placeholder="Confirm Password" />
								</div>
								<button type="submit"
									className="common_btn mt_20">submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ChangePassword
