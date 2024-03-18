import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'

const Dish = () => {
	return (
		<li>
			<div className="menu_cart_img">
				<Image src="src/assets/images/menu8.png" alt="menu" className="img-fluid w-100" />
			</div>
			<div className="menu_cart_text">
				<a className="title" href="#">Hyderabadi Biryani </a>
				<p className="size">small</p>
				<span className="extra">coca-cola</span>
				<span className="extra">7up</span>
				<p className="price">$99.00 <del>$110.00</del></p>
			</div>
			<span className="del_icon">
				<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
			</span>
		</li>
	)
}

export default Dish
