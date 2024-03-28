import { useNavigate } from 'react-router-dom'
import WrapperContent from '../../WrapperContent'
import DataTable from '../../../DataTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

const Staff = () => {
	const navigate = useNavigate()
	
	const columns = [
		{
			Header: 'Name',
			accessor: 'name'
		},
		{
			Header: 'Status',
			accessor: 'status'
		},
		{
			Header: 'Action',
			accessor: 'action',
			id: 'action',
			getComponent: (productId) => {
				return (
					<>
						<FontAwesomeIcon 
							icon={faEdit} 
							className='animation-icon'
							onClick={() => navigate(`/admin/account/${productId}/edit`)} 
						/>
		
						<FontAwesomeIcon 
							icon={faTrash	} 
							className='animation-icon' 
							// onClick={() => handleOpenModal(productId)}
						/>
					</>
				)
			}
		}
	]
	const data = [{ name: '1', status: 1, id: 1 }]

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
			<DataTable columns={columns} data={data} />
	
		</WrapperContent>
	)
}

export default Staff
