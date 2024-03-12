import { faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const OrderDetail = () => {

  const listItem = [
    {},
    {},
    {},
    {},
  ]

  const renderItem = listItem.map((item, index) => {
    return (
      <tr key={index}>
        <td className="sl_no">01</td>
        <td className="package">
          <p>Nb</p>
          <span className="size">small</span>
          <span className="coca_cola">coca-cola</span>
          <span className="coca_cola2">7up</span>
        </td>
        <td className="price">
          <b>$120</b>
        </td>
        <td className="qnty">
          <b>2</b>
        </td>
        <td className="total">
          <b>$240</b>
        </td>
      </tr>
    )
  })

  return (
    <div className="fp__invoice">
      <a className="go_back"><i className="fas fa-long-arrow-alt-left"></i> go back</a>
      {/* <div className="fp__track_order">
        <ul>
          <li className="active">order pending</li>
          <li>order accept</li>
          <li>order process</li>
          <li>on the way</li>
          <li>Completed</li>
        </ul>
      </div> */}
      <div className="fp__invoice_header">
        <div className="header_address">
          <h4>invoice to</h4>
          <p>a</p>
          <p>123456789</p>
        </div>
        <div className="header_address">
          <p><b>invoice no: </b><span>123</span></p>
          <p><b>Order ID:</b> <span> #23</span></p>
          <p><b>date:</b> <span>10-11-2024</span></p>
        </div>
      </div>
      <div className="fp__invoice_body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr className="border_none">
                <th className="sl_no">SL</th>
                <th className="package">item description</th>
                <th className="price">Price</th>
                <th className="qnty">Quantity</th>
                <th className="total">Total</th>
              </tr>
            </thead>
            <tbody>
              {renderItem}
            </tbody>

            <tfoot>
              <tr>
                <td className="package" colSpan="3">
                  <b>sub total</b>
                </td>
                <td className="qnty">
                  <b>12</b>
                </td>
                <td className="total">
                  <b>$755</b>
                </td>
              </tr>
              <tr>
                <td className="package coupon" colSpan="3">
                  <b>(-) Discount coupon</b>
                </td>
                <td className="qnty">
                  <b></b>
                </td>
                <td className="total coupon">
                  <b>$0.00</b>
                </td>
              </tr>
              <tr>
                <td className="package coast" colSpan="3">
                  <b>(+) Shipping Cost</b>
                </td>
                <td className="qnty">
                  <b></b>
                </td>
                <td className="total coast">
                  <b>$10.00</b>
                </td>
              </tr>
              <tr>
                <td className="package" colSpan="3">
                  <b>Total Paid</b>
                </td>
                <td className="qnty">
                  <b></b>
                </td>
                <td className="total">
                  <b>$765</b>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <span className="print_btn common_btn">
        <FontAwesomeIcon icon={faPrint} />
        print PDF</span>
    </div>
  )
}

export default OrderDetail