import { useNavigate } from 'react-router-dom'
import WrapperContent from '../../WrapperContent'
import DataTable from '../../../DataTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccountAction from '../../../../redux/action/admin/AccountAction'
import { createAxiosJwt } from '../../../../../createInstance'
import ModalCustom from '../../../Modal/ModalCustom'

const Staff = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt('admin')
	const [isShowModal, setIsShowModal] = useState(false)
	const [currentIdAccount, setCurrentIdAccount] = useState()

	const handleOpenModal = (accountId) => {
		setIsShowModal(true)
		setCurrentIdAccount(accountId)
	}
	const { listStaff } = useSelector(state => state.admin.accountReducer)
	
	const columns = [
		{
			Header: 'Name',
			accessor: 'username'
		},
		{
			Header: 'Status',
			accessor: 'status',
			type: 'action',
			getComponent: (productId, value) => {
				const content = Number(value) === 1 ? 'Active' : 'Inactive'
				return (
					<span>{content}</span>
				)
			}
		},
		{
			Header: 'Action',
			accessor: 'action',
			type: 'action',
			getComponent: (accountId) => {
				return (
					<>
						<FontAwesomeIcon 
							icon={faEdit} 
							className='animation-icon'
							onClick={() => navigate(`/admin/account/${accountId}/edit`)} 
						/>
		
						<FontAwesomeIcon 
							icon={faTrash	} 
							className='animation-icon' 
							onClick={() => handleOpenModal(accountId)}
						/>
					</>
				)
			}
		}
	]
		
	useEffect(() => {
		dispatch(AccountAction.getListStaff(axiosJwt))

	}, [])
	
	const handleRemoveAccount = () => { 
		dispatch(AccountAction.deleteAccount(axiosJwt, currentIdAccount))
		setIsShowModal(false)
	}

	const action = (
		<button className="btn btn-primary" onClick={() => navigate('/admin/account/create')}>
			Create new
		</button>
	)
	return (
		<WrapperContent 
			title='Staff'
			subTitle='All Staff'
			action={action}
		>
			<DataTable columns={columns} data={listStaff} />

			<ModalCustom 
				handleActionPrimary={handleRemoveAccount}
				handleActionSecondary={() => setIsShowModal(false)}
				isShow={isShowModal}
				content={'Do you want remove?'} 
				title={'Remove Category'}
			/>
		</WrapperContent>
	)
}

export default Staff
