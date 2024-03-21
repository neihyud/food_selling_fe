import { useNavigate } from 'react-router-dom'
import DataTable from './DataTable'
import WrapperContent from '../WrapperContent'

const columns = [
	{
		Header: 'ID',
		accessor: 'id',
	},
	{
		Header: 'Name',
		accessor: 'name',
	},
	{
		Header: 'Age',
		accessor: 'age',
	},
	{
		Header: 'Action',
		accessor: 'action',
		id: 'icon'
	},
]

const data = [
	{ id: 1, name: 'John Doe', age: 30 },
	{ id: 2, name: 'Jane Smith', age: 25 },
	{ id: 3, name: 'Bob Johnson', age: 35 },
]

const Category = () => {
	const navigate = useNavigate()
	const action = (
		<button className="btn btn-primary" onClick={() => navigate('/admin/category/create')}>
			Create new
		</button>
	)
	return (
		<WrapperContent
			title='Product Categories'
			subTitle='All Categories'
			action={action}
		>
			<DataTable columns={columns} data={data} />

		</WrapperContent>
	)
}

export default Category
