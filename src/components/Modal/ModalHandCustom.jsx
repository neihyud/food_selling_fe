import './modal.css'
import PropTypes from 'prop-types'

const ModalHandCustom = ({ children, handleClose }) => {
	return (
		<div className='wrapper-modal'
			onClick={handleClose}
		>
			{children}
		</div>
	)
}

ModalHandCustom.propTypes = {
	children: PropTypes.node,
	handleClose: PropTypes.func
}

export default ModalHandCustom
