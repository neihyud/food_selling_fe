import { faStar } from "@fortawesome/free-regular-svg-icons"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Image } from "react-bootstrap"

const FoodCardDetail = () => {
  return (
    <div className="fp__cart_popup">
      <div className="modal show" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                className="fal fa-times"></i></button>
              <div className="fp__cart_popup_img">
                <Image src="images/menu1.png" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="fp__cart_popup_text">
                <a href="#" className="title">Maxican Pizza Test Better</a>
                <p className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <span>(201)</span>
                </p>
                <h4 className="price">$320.00 <del>$350.00</del> </h4>

                <div className="details_size">
                  <h5>select size</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" />
                    checked
                    <label className="form-check-label" htmlFor="large">
                      large <span>+ $350</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" />
                    <label className="form-check-label" htmlFor="medium">
                      medium <span>+ $250</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" />
                    <label className="form-check-label" htmlFor="small">
                      small <span>+ $150</span>
                    </label>
                  </div>
                </div>

                <div className="details_extra_item">
                  <h5>select option <span>(optional)</span></h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="coca-cola">
                      coca-cola <span>+ $10</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="7up">
                      7up <span>+ $15</span>
                    </label>
                  </div>
                </div>

                <div className="details_quantity">
                  <h5>select quantity</h5>
                  <div className="quantity_btn_area d-flex flex-wrapa align-items-center">
                    <div className="quantity_btn">
                      <button className="btn btn-danger"><FontAwesomeIcon icon={faMinus} /></button>
                      <input type="text" placeholder="1" />
                      <button className="btn btn-success"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                  </div>
                </div>
                <ul className="details_button_area d-flex flex-wrap">
                  <li><a className="common_btn" href="#">add to cart</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCardDetail