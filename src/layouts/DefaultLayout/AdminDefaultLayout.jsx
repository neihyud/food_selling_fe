import Menu from '../../components/Admin/Menu'
import './layout.css'
import PropTypes from 'prop-types'

const AdminDefaultLayout = ({ children }) => {
	return (
		<div className='wrapper-admin-layout'>
			<div style={{ with: '250px' }}>
				<Menu/>
			</div>
			<div style={{ paddingLeft: '250px' }}>
				{children}
			</div>
		</div>
	)
}

AdminDefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default AdminDefaultLayout
