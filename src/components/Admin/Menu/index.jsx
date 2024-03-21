import './menu.css'

import SubMenu from './SubMenu'
import LIST_MENU from '../../../config/admin/menu'

const Menu = () => {
	return (
		<>
			<div className='main-sidebar'>
				<div className="sidebar-brand">
					<span>{'FOOD PARK'}</span>
				</div>
				<ul className='sidebar-menu'>
					{
						LIST_MENU.map((item, index) => {
							return <SubMenu key={index} item={item}/>
						})
					}
				
				</ul>
			</div>
		
		</>
	)
}

export default Menu
