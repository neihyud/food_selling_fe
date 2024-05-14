import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

const SliderItem = (props) => {

	const { img, offer, title, sub_title, short_description, alt } = props

	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-5 col-md-5 col-lg-5">
					<div className="fp__banner_img wow fadeInLeft" data-wow-duration="1s">
						<div className="img">
							<Image src={img} alt={alt} className="img-fluid w-100" roundedCircle />
							<span> {offer}% off </span>
						</div>
					</div>
				</div>
				<div className="col-xl-5 col-md-7 col-lg-6">
					<div className="fp__banner_text wow fadeInRight" data-wow-duration="1s">
						<h1>{title}</h1>
						<h3>{sub_title}</h3>
						<p>{short_description}</p>
						{/* <li className="d-flex flex-wrap">
							<button className="common_btn">shop now</button>
						</li> */}
					</div>
				</div>
			</div>
		</div>
	)
}

SliderItem.propTypes = {
	img: PropTypes.string,
	offer: PropTypes.number,
	title: PropTypes.string,
	sub_title: PropTypes.string,
	short_description: PropTypes.string,
	alt: PropTypes.string
}

export default SliderItem
