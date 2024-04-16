import PropTypes from 'prop-types'
import DashboardConstant from '../../../constant/DashboardConstant'
import moment from 'moment'
const Chat = (props) => {
	const { chat, isOwner } = props

	return (
		<>
			<div className={`fp__chat ${isOwner ? 'tf_chat_right' : ''}`}>
				<div className="fp__chat_img">
					<img src={DashboardConstant.IMG_USER_DEFAULT} alt="person"
						className="img-fluid w-100" />
				</div>
				{/* <div className={`fp__chat_text ${isOwner ? 'tf_chat_right' : ''}`}> */}
				<div className={'fp__chat_text tf_chat_right'}>
					<p>{chat.message}</p>
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
