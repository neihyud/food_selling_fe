import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ModalCustom = (props) => {
	const { handleActionPrimary, handleActionSecondary, isShow, content, title, isDisablePrimaryAction = false } = props
	return (
		<>
			<Modal 
				show={isShow} 
				onHide={handleActionSecondary} 
				animation={true}
				centered	
			>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{content}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleActionSecondary}>
            Close
					</Button>
					<Button variant="primary" onClick={handleActionPrimary} disabled={isDisablePrimaryAction}>
            OK
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)

}

ModalCustom.propTypes = {
	handleActionPrimary: PropTypes.func,
	handleActionSecondary: PropTypes.func,
	isShow: PropTypes.bool,
	content: PropTypes.string,
	title: PropTypes.string,
	isDisablePrimaryAction: PropTypes.bool
}

export default ModalCustom
