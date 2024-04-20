import WrapperContent from '../WrapperContent'
import './chatbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { createAxiosJwt } from '../../../../createInstance'
import DashboardConstant from '../../../constant/DashboardConstant'
import { socket } from '../../../socket'
const ChatBox = () => {
	const [message, setMessage] = useState()

	const [listChatUser, setListChatUser] = useState()

	const [currentUserChat, setCurrentUserChat] = useState([])
	const [currentUser, setCurrentUser] = useState()

	const lastChildBox = useRef()

	const axiosJwt = createAxiosJwt('admin')
	const handleSendMessage = async () => { 
		if (!message) {
			return undefined
		}
		const response = await axiosJwt.post('/chat/send-message', {
			message,
			receiver_id: currentUser.id
		})

		if (response.data.success) {
			setMessage('')
		}

		socket.emit('message', {
			message: message,
			token: JSON.parse(localStorage.getItem('token')),
			socketID: socket.id,
			receiver_id: currentUser.id,
			createdAt: new Date()
		})
	}

	useEffect(() => {
		const getListUser = async () => {
			const response = await axiosJwt.get('/admin/chat/get-list-user')
			setListChatUser(response?.data?.data || [])
		}

		getListUser()
	}, [])

	const handleChooseChat = async (user) => {
		
		const response = await axiosJwt.get(`/admin/chat?receiverId=${user.id}`)
		setCurrentUser(user)
		setCurrentUserChat(response?.data?.data)
	}

	useEffect(()=> {
		socket.on('messageResponse', data => {
			setCurrentUserChat([...currentUserChat, data])
		})	
		lastChildBox.current?.scrollIntoView({ behavior: 'smooth' })
	}, [socket, currentUserChat])

	const renderUserOnline = () => {
		return listChatUser?.map((user, index) => {
			return (
				<li className="media" key={index} style={{ display: 'flex' }} onClick={() => handleChooseChat(user)}>
					<div style={{ width: '50px', marginRight: '10px' }}>
						<img src={DashboardConstant.IMG_USER_DEFAULT} alt="person" className="img-fluid w-100"/>
					</div>
					<div className="media-body">
						<div className="mt-0 mb-1 font-weight-bold">{user.username}</div>
						<div className="text-success text-small font-600-bold"><i className="fas fa-circle"></i> Online</div>
					</div>
				</li>
			)
		})
	}

	const renderChat = () => {
		return currentUserChat?.map((chat, index) => {
			const pos = currentUser.id === chat.sender_id ? 'left' : 'right'
			return (
				<div className={`chat-item chat-${pos}`} key={index}>
					<div className="chat-details">
						<div className="chat-text">{chat?.message}</div>
						<div className="chat-time">{chat?.createAt}</div>
					</div>
				</div>
			)
		}) 
	}

	return (
		<WrapperContent
			title='Chat Box'  
			isCloseHeader={true}
			isDisableScroll={true}
		>
			<div className="row">
				<div className="col-12 col-sm-6 col-lg-3">
					<div className="chat-box h-100" style={{ padding: '10px' }}>
						<div className={'chat-content h-100'}>{renderUserOnline()}</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-lg-9">
					<div className="chat-box h-100">
						<h4>Chat with {currentUser?.username}</h4>
						<div className="chat-content"> 
							<div className={'custom-scroll'} style={{ height: '620px', overflow: 'auto' }}>
								{renderChat()}
								<p ref={lastChildBox}></p>
							</div>
							<div className="card-footer chat-form">
								<div>
									<input type="text" className="form-control" placeholder="Type a message" value={message} onChange={(event) => setMessage(event.target.value)}/>
									<button className="btn btn-primary" onClick={handleSendMessage}>
										<FontAwesomeIcon icon={faPaperPlane}/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</WrapperContent>
	)
}

export default ChatBox
