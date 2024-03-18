import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const Menu = ({ items }) => {

	const renderItems = () => {
		return items.map((item, index) => {
			return (
				<MenuItem
					key={index}
					title={item.title}
					to={item.to}
				/>
			)
		})
	}
	return (
		<div className="collapse navbar-collapse">
			<ul className='navbar-nav m-auto'>
				{renderItems()}
			</ul>
		</div>
	)
}

Menu.propTypes = {
	items: PropTypes.array,
}

export default Menu
