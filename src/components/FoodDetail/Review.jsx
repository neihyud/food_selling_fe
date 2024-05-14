import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReviewItem from './ReviewItem'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import { createAxiosJwt } from '../../../createInstance'
import PropTypes from 'prop-types'

const Review = ({ id }) => {
	const axiosJwt = createAxiosJwt()
	const fieldsConfig = {}

	const [listReview, setListReview] = useState([])

	const { 
		dataForm, 
		handleChange, 
		handleBlur, 
		handleSetDataForm, 
		error, 
		setError, 
		validateForm, 
		hasDisableBtnSubmit 
	} = useForm(fieldsConfig, { rate: 1 })

	const getListReview = async () =>{ 
		const response = await axiosJwt.get(`/user/review/${id}`)

		setListReview(response.data)
	}

	const handleSubmitReview = async (event) => {
		event.preventDefault()
		await axiosJwt.post('/user/review', { ...dataForm, product_id: id })

		getListReview()
	}

	useEffect(() => {
		getListReview()
	}, [])

	const renderReview = () => {
		if (listReview) {
			return listReview.map((item, index) => {
				return <ReviewItem item={item} key={index}/>
			})
		}
	}

	return (
		<div className="tab-content" style={{ marginTop: '40px' }}>
			<div className="tab-pane show active">
				<div className="menu_det_description">
					<div className="tab-pane">
						<div className="fp__review_area">
							<div className="row">
								<div className="col-lg-7">
									<h4>{listReview?.length || 0} reviews</h4>
									<div className="fp__comment pt-0 mt_20">
										{renderReview()}
									</div>
								</div>
								<div className="col-lg-5">
									<div className="fp__post_review">
										<h4>write a Review</h4>
										<form>
											<label >Choose a rating</label>
											<div className="row">
												<div className="col-xl-12">
													<select 
														name="rate" 
														className="form-control"
														value={dataForm?.rate}
														onChange={handleChange}
													>
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
														<option value="4">4</option>
														<option value="5">5</option>
													</select>
                          
												</div>
											
												<div className="col-xl-12">
													<textarea 
														rows="3"
														placeholder="Write your review"
														name='review'
														value={dataForm?.review || ''}
														onChange={handleChange}
													>
													</textarea>
												</div>
												<div className="col-12">
													<button className="common_btn" onClick={handleSubmitReview}>
                            submit review
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Review.propTypes = {
	id: PropTypes.string
}

export default Review
 
