import PropTypes from 'prop-types'
import DashboardConstant from '../../../constant/DashboardConstant'
import moment from 'moment'
import LocalStorageService from '../../../services/LocalStorageService'
const Chat = (props) => {
	const { chat, isOwner } = props

	const getImageUser = () => {

		if (isOwner) {
			
			return LocalStorageService.getUser()?.img || DashboardConstant.IMG_USER_DEFAULT
		}

		return DashboardConstant.IMG_STORE_DEFAULT
	}

	return (
		<>
			<div className={`fp__chat ${isOwner ? 'tf_chat_right' : ''}`}>
				<div className="fp__chat_img">
					<img src={getImageUser()} alt="person"
						className="img-fluid w-100" />
				</div>
				<div className={'fp__chat_text tf_chat_right'}>
					<p className={`${isOwner ? '' : 'color-gray'}`}>{chat.message}</p>
					<span style={{ fontSize: '12px' }}> {moment.utc(chat.createdAt).format('DD MMM, YYYY, hh:mm A')}</span>
				</div>
			</div></>
	)
}

Chat.propTypes = {
	chat: PropTypes.object,
	isOwner: PropTypes.bool
}

export default Chat
