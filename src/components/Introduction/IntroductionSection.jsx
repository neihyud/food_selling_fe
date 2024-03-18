import PropTypes from 'prop-types'
import './introduction.css'

const IntroductionSection = ({ title, subTitle, content }) => {
	return (
		<div className="row wow fadeInUp" data-wow-duration="1s">
			<div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center ">
				<div className="fp__section_heading mb-5">
					<h4>{title}</h4>
					<h2>{subTitle}</h2>
					<p>{content}</p>
				</div>
			</div>
		</div>
	)
}

IntroductionSection.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default IntroductionSection
