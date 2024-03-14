import { Image } from 'react-bootstrap'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCamera, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem'

const MenuDashboard = () => {
  const infoNav = [
    {
      imgUrl: '',
      icon: faUser,
      name: 'personal info'
    },
    {
      imgUrl: '',
      icon: faUser,
      name: 'address'
    },
    {
      imgUrl: '',
      icon: faBagShopping,
      name: 'order'
    },
    {
      imgUrl: '',
      icon: faBagShopping,
      name: 'Reviews'
    },
    {
      imgUrl: '',
      icon: faBagShopping,
      name: 'change password'
    },
    {
      imgUrl: '',
      icon: faSignOutAlt,
      name: 'log out'
    },

    // to do log out -> icon
  ]

  const renderNav = infoNav.map((item, index) => {
    return <MenuItem key={index} {...item} />
  })

  return (
    <div className="fp__dashboard_menu">
      <div className="dashboard_header">
        <div className="dashboard_header_img">
          <Image src="src/assets/images/comment_img_2.png" alt="user" class="img-fluid w-100" />
          <label htmlFor="upload">
            <FontAwesomeIcon icon={faCamera} />
          </label>
          <input type="file" hidden />
        </div>
        <h2>Hi</h2>
      </div>
      <div className="nav flex-column nav-pills">
        {renderNav}
      </div>
    </div >
  )
}

export default MenuDashboard