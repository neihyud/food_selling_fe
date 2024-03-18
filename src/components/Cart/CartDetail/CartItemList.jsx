import PropTypes from 'prop-types'

import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'

const CartItemList = ({ imgUrl, detail, price, quantity, total }) => {
	return (
		<tr>
			<td className="fp__pro_img">
				<Image src={imgUrl} alt="product" className="img-fluid" />
			</td>

			<td className="fp__pro_name">
				<a href="#">Hyderabadi Biryani</a>
				<span>medium</span>
				<p>coca-cola</p>
				<p>{detail.sub}</p>
			</td>

			<td className="fp__pro_status td-center">
				<h6>{price}</h6>
			</td>

			<td className="fp__pro_select td-center">
				<div className="quantity_btn">
					<button className="btn-danger">
						<FontAwesomeIcon icon={faMinus} />
					</button>
					<input type="text" placeholder="1" value={quantity} />
					<button className="btn-success">
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
			</td>

			<td className="fp__pro_tk td-center">
				<h6>{total}</h6>
			</td>

			<td className="fp__pro_icon td-center">
				<a href="#">
					<FontAwesomeIcon icon={faTrash} />
				</a>
			</td>
		</tr>
	)
}

CartItemList.propTypes = {
	imgUrl: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number,
	total: PropTypes.number,
	detail: PropTypes.object
}

export default CartItemList
