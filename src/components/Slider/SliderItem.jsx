import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

const SliderItem = (props) => {

	const { imgSrc, discount, title, subTitle, content, alt } = props

	return (
		<div className="container">
			<div className="row">
				<div className="col-xl-5 col-md-5 col-lg-5">
					<div className="fp__banner_img wow fadeInLeft" data-wow-duration="1s">
						<div className="img">
							<Image src={imgSrc} alt={alt} className="img-fluid w-100" roundedCircle />
							<span> {discount}% off </span>
						</div>
					</div>
				</div>
				<div className="col-xl-5 col-md-7 col-lg-6">
					<div className="fp__banner_text wow fadeInRight" data-wow-duration="1s">
						<h1>{title}</h1>
						<h3>{subTitle}</h3>
						<p>{content}</p>
						<li className="d-flex flex-wrap">
							<a className="common_btn" href="#">shop now</a>
						</li>
					</div>
				</div>
			</div>
		</div>
	)
}

SliderItem.propTypes = {
	imgSrc: PropTypes.string,
	discount: PropTypes.number,
	title: PropTypes.string,
	subTitle: PropTypes.string,
	content: PropTypes.string,
	alt: PropTypes.string
}

export default SliderItem
