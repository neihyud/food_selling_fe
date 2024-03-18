import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const BenefitItem = ({ title, content, icon }) => {
	return (
		<div className="col-xl-4 col-md-6 col-lg-4">
			<div className="fp__choose_single">
				<div className="icon icon_1">
					<FontAwesomeIcon icon={icon} />
				</div>
				<div className="text">
					<h3>{title}</h3>
					<p>{content}</p>
				</div>
			</div>
		</div>
	)
}

BenefitItem.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	icon: PropTypes.object
}

export default BenefitItem
