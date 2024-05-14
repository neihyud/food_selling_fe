import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarBold } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment/moment'
import PropTypes from 'prop-types'
const ReviewItem = ({ item }) => {

	const renderReview = () => { 
		return new Array(5).fill(0).map((_, index) => {
			if (item?.rate && item.rate >= (index + 1)) {
				return	(<FontAwesomeIcon icon={faStarBold} key={index} />)
			}

			return (<FontAwesomeIcon icon={faStar} key={index} />)
		})
	}

	return (
		<div className='' style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', height: '80px' }}>
			<div className='' style={{
				borderRadius: '50%',
				height: '50px',
				width: '50px',
				padding: '2px',
				backgroundColor: 'red',
				overflow: 'hidden'
			}}>
				<img src={item?.user_id?.img} alt="" className='object-cover'/>
			</div>
			<div className="fp__single_comm_text" style={{ flex: 1 }}>
				<span className='' style={{ display: 'flex', justifyContent: 'space-between' }}>
					<span>
						<span style={{ fontWeight: 600 }}>{item?.user_id?.name}</span>
						<span className="rating" style={{
							fontSize: '12px',
							marginLeft: '20px'
						}}>
							{renderReview()}
						</span>
					</span>
					<span>{moment(item.createdAt).format('DD-MM-YY')}</span>
				</span>
				<p style={{ padding: 0, margin: 0 }}>{item?.review}</p>
			</div>
		</div>
	)
}

ReviewItem.propTypes = {
	item: PropTypes.string
}

export default ReviewItem
