import { useNavigate } from 'react-router-dom'
import DataTable from '../Category/DataTable'
import '../manageProduct.css'
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
		Header: 'Description',
		accessor: 'description',
	},
	{
		Header: 'Action',
		accessor: 'action',
		id: 'icon'
	},
]

const data = [
	{ id: 1, name: 'John Doe', description: 30 },
	{ id: 2, name: 'Jane Smith', description: 25 },
	{ id: 3, name: 'Bob Johnson', description: 35 },
]

const Product = () => {
	const navigate = useNavigate()

	const action = (
		<button className="btn btn-primary" onClick={() => navigate('/admin/product/create')}>
			Create new
		</button>
	)
	return (
		<WrapperContent 
			title='Products'
			subTitle='All Products'
			action={action}
		>
			<DataTable columns={columns} data={data} />
		
		</WrapperContent>
	)
}

export default Product
