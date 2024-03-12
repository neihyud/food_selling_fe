import './address.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddressItem from './AddressItem'
import AddressManagement from './AddressManagement'

const Address = () => {
  const listAddress = [{}, {}, {}]
  const renderAddress = listAddress.map((item, index) => {
    return <AddressItem key={index} {...item} />
  })

  return (
    <div className="fp_dashboard_body address_body">
      <h3>address <a className="dash_add_new_address">
        <FontAwesomeIcon icon={faPlus} /> add new
      </a>
      </h3>
      <div className="fp_dashboard_address">
        <div className="fp_dashboard_existing_address">
          <div className="row">
            {renderAddress}
          </div>
        </div>

        <AddressManagement type={'add'} />
        <AddressManagement type={'edit'} />
      </div>
    </div>
  )
}

export default Address