import { useNavigate } from 'react-router-dom'
import WrapperContent from '../../WrapperContent'
import DataTable from '../../../DataTable'

const Staff = () => {
	const navigate = useNavigate()
	
	const columns = []
	const data = []

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
