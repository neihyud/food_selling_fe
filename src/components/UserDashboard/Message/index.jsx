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
		const userId = LocalStorageService.getUser().id
		
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
						<div className="fp__chat_area">
							{/* <div className="fp__chat_body">
								<div className="fp__chat">
									<div className="fp__chat_img">
										<img src="images/service_provider.png" alt="person"
											className="img-fluid w-100" />
									</div>
									<div className="fp__chat_text">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur qui amet aperiam, magni accusamus voluptatum
                                neque
                                aut tenetur odit officia fugit et sint harum inventore
                                recusandae id quibusdam ducimus consequuntur.</p>
										<span>15 Jun, 2023, 05:26 AM</span>
									</div>
								</div>
								<div className="fp__chat tf_chat_right">
									<div className="fp__chat_img">
										<img src="images/client_img_1.jpg" alt="person"
											className="img-fluid w-100"/ >
									</div>
									<div className="fp__chat_text">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
										<span>15 Jun, 2023, 05:26 AM</span>
									</div>
								</div>
							</div> */}
							{renderChat()}
							<p ref={lastChildBox}></p>
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
