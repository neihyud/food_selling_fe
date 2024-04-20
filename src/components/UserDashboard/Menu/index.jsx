import { Image } from 'react-bootstrap'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBagShopping, faCamera, faKey, faMessage, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem'
import LocalStorageService from '../../../services/LocalStorageService'

const MenuDashboard = () => {
	const infoNav = [
		{
			icon: faUser,
			name: 'personal info',
			type: 'user'
		},
		{
			icon: faAddressBook,
			name: 'address',
			type: 'address'
		},
		{
			icon: faBagShopping,
			name: 'order',
			type: 'order'
		},
		{
			icon: faKey,
			name: 'change password',
			type: 'change_password'

		},
		{
			icon: faMessage,
			name: 'Message',
			type: 'message'

		}
	]

	const renderNav = infoNav.map((item, index) => {
		return <MenuItem key={index} {...item} />
	})

	const handleLogout = () => {
		LocalStorageService.removeToken()
		window.location.replace('/login')
	}

	return (
		<div className="fp__dashboard_menu" style={{ position: 'relative' }}>
			<div className="dashboard_header">
				<div className="dashboard_header_img">
					<Image src={LocalStorageService.getUserImage()} className="img-fluid w-100" />
					<label htmlFor="upload">
						<FontAwesomeIcon icon={faCamera} />
					</label>
					<input type="file" hidden />
				</div>
				<h2>{LocalStorageService.getUserName()}</h2>
			</div>
			<div className="nav flex-column nav-pills">
				{renderNav}

				<button className="nav-link" onClick={handleLogout} style={{ position: 'absolute', bottom: '0', left: '0', right: '0', outline: 'none', borderBottom: 'none' }}>
					<span>
						<FontAwesomeIcon icon={faSignOutAlt} />
					</span>
					{'Log out'}
				</button>
			</div>
		</div >
	)
}

export default MenuDashboard
