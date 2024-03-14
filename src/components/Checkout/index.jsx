import AddressItem from '../UserDashboard/Address/AddressItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TotalSummaryCart from '../Cart/CartDetail/TotalSummaryCart'

const Checkout = () => {
  const listAddress = [
    {}, {}, {}, {}
  ]

  const renderAddress = listAddress.map((item, index) => {
    return <AddressItem key={index} {...item} type='no-action' />
  })
  return (
    <section className="fp__cart_view mt_125 xs_mt_95 mb_100 xs_mb_70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-7 wow fadeInUp" data-wow-duration="1s">
            <div className="fp__checkout_form">
              <div className="fp__check_form">
                <h5>select address
                  <a href="#" data-bs-toggle="modal" data-bs-target="#address_modal">
                    <FontAwesomeIcon icon={faPlus} />
                    add address</a></h5>
                <div className="row">
                  {renderAddress}
                </div>

                <form>
                  <div className="row">
                    <div className="col-12">
                      <h5>billing address</h5>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-12">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="Company Name (Optional)" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <select className='nice-select'>
                          <option value="">select country</option>
                          <option value="">bangladesh</option>
                          <option value="">nepal</option>
                          <option value="">japan</option>
                          <option value="">korea</option>
                          <option value="">thailand</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="Street Address *" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="Town / City *" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="State *" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="Zip *" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="text" placeholder="Phone *" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <div className="fp__check_single_form">
                        <input type="email" placeholder="Email *" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-12">
                      <div className="fp__check_single_form">
                        <h5>Additional Information</h5>
                        <textarea cols="3" rows="4"
                          placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>

          {/* <div className="col-lg-4 wow fadeInUp" data-wow-duration="1s">
            <div id="sticky_sidebar" className="fp__cart_list_footer_button">
              <h6>total cart</h6>
              <p>subtotal: <span>$124.00</span></p>
              <p>delivery: <span>$00.00</span></p>
              <p>discount: <span>$10.00</span></p>
              <p className="total"><span>total:</span> <span>$134.00</span></p>
              <form>
                <input type="text" placeholder="Coupon Code" />
                <button type="submit">apply</button>
              </form>
              <a className="common_btn" href=" #">checkout</a>
            </div>
          </div> */}

          <div className="col-lg-4 wow fadeInUp" data-wow-duration="1s">
            <TotalSummaryCart />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout