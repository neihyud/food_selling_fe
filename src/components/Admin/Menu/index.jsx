import './menu.css'

import SubMenu from './SubMenu'
import LIST_MENU from '../../../config/admin/menu'
import LocalStorageService from '../../../services/LocalStorageService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		LocalStorageService.removeTokenAdmin()
		navigate('/admin/login')
	}

	return (
		<>
			<div className='main-sidebar'>
				<div className="sidebar-brand">
					<span>{'FOOD PARK'}</span>
				</div>
				<ul className='sidebar-menu'>
					{
						LIST_MENU.map((item, index) => {

							if (item?.isAdmin) {
								const current = LocalStorageService.getInfoStaffStore()
				
								if (current?.role !== 'admin') {
									return undefined
								}
							}

							return (
								<SubMenu 
									key={index} 
									item={item} 
									id={item.key} 
									keyPath={[item.key]}
								/>
							)
						}).filter(Boolean)
					}
					<>
						<li className={'dropdown active'} onClick={handleLogout}>
							<div>
								<FontAwesomeIcon icon={faSignOutAlt} />
								<span className='nav-name'>{'Log out'}</span>
							</div>
						</li>
					</>
					
				</ul>
			</div>
		
		</>
	)
}

export default Menu
