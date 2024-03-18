const EditUser = () => {
	return (
		<div className="fp_dash_personal_info_edit comment_input p-0">
			<form>
				<div className="row">
					<div className="col-12">
						<div className="fp__comment_imput_single">
							<label>name</label>
							<input type="text" placeholder="Name" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div className="fp__comment_imput_single">
							<label>email</label>
							<input type="email" placeholder="Email" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div className="fp__comment_imput_single">
							<label>phone</label>
							<input type="text" placeholder="Phone" />
						</div>
					</div>
					<div className="col-xl-12">
						<div className="fp__comment_imput_single">
							<label>address</label>
							<textarea rows="4" placeholder="Address"></textarea>
						</div>
						<button type="submit" className="common_btn">submit</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default EditUser
