import { faEdit, faHome, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddressItem = () => {
  return (
    <div className="col-md-6">
      <div className="fp__checkout_single_address">
        <div className="form-check">
          <label className="form-check-label">
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
              home
            </span>

            <span className="address">house, road, block,
              A
              B.</span>
          </label>
        </div>
        <ul>
          <li>
            <a className="dash_edit_btn">
              <FontAwesomeIcon
                icon={faEdit} />
            </a>
          </li>
          <li>
            <a className="dash_del_icon">
              <FontAwesomeIcon icon={faTrashAlt} />
            </a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default AddressItem