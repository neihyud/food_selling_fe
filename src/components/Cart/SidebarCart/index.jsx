import './sidebarCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Dish from './Dish'

const SideBarCart = () => {
  const listDish = [
    {}, {},
    {}, {},
    {}, {},
  ]

  const renderList = listDish.map((item, index) => {
    return <Dish key={index} {...item} />
  })

  return (
    <div className="fp__menu_cart_area">
      <div className="fp__menu_cart_body">
        <div className="fp__menu_cart_header">
          <h5>total item (05)</h5>
          <span className="close_cart">
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <ul>
          {renderList}
        </ul>
        <div>
          <p className="subtotal">subtotal <span>$1220.00</span></p>
          <button className="common_btn w-100">view cart</button>
          <button className="common_btn w-100">checkout</button>
        </div>
      </div>
    </div>
  )
}

export default SideBarCart