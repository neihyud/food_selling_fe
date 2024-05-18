import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './message.css'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { createAxiosJwt } from '../../../../createInstance'
import { useEffect, useRef, useState } from 'react'
import LocalStorageService from '../../../services/LocalStorageService'
import Chat from './Chat'
import { socket } from '../../../socket'
const Message = () => {
	const [message, setMessage] = useState()

	const [listChat, setListChat] = useState([])

	const axiosJwt = createAxiosJwt()

	const handleSendMessage = async () => {
		if (!message) {
			return undefined
		}
		const response = await axiosJwt.post('/chat/send-message', {
			message
		})

		socket.emit('message', {
			message: message,
			token: JSON.parse(localStorage.getItem('token')),
			socketID: socket.id,
			createdAt: new Date()
		})

		if (response.data.success) {
			setMessage('')
		}
	}

	const lastChildBox = useRef()

	useEffect(()=> {
		socket.on('messageResponse', data => {
			setListChat([...listChat, data])
		})	
		lastChildBox.current?.scrollIntoView({ behavior: 'smooth' })
	}, [socket, listChat])

	useEffect(() => {
		const getListChat = async () => {
			const response = await axiosJwt.get('/chat')

			if (response.data.success) {
				setListChat(response.data.data)
			}
		}  
		getListChat()
	}, [])

	const renderChat = () => {
		const userId = LocalStorageService?.getUser()?.id
		
		return listChat.map((chat) => {
			return <Chat key={chat.id} chat ={chat} isOwner={userId === chat.sender_id} />
		})
	}

	return (
		<> 
			<div className="tab-pane">
				<div className="fp_dashboard_body fp__change_password">
					<div className="fp__message">
						<h3>Message</h3>
						<div className='wrapper-area-message'>
							<div className="fp__chat_area">
								{renderChat()}
								<p ref={lastChildBox}></p>
							</div>
							<div className="fp__single_chat_bottom">
								<input 
									type="text" placeholder="Type a message..."
									value={message}
									onChange={(event) => setMessage(event.target.value)}
								/>
								<button className="fp__massage_btn" style={{ border: 'none' }} onClick={handleSendMessage}>
									<FontAwesomeIcon icon={faPaperPlane}/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Message
