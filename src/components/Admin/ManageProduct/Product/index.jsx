import { useNavigate } from 'react-router-dom'
import '../manageProduct.css'
import WrapperContent from '../../WrapperContent'
import DataTable from '../../../DataTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const data = [
	{ id: 1, name: 'John Doe', description: 30 },
	{ id: 2, name: 'Jane Smith', description: 25 },
	{ id: 3, name: 'Bob Johnson', description: 35 },
	{ id: 1, name: 'John Doe', description: 30 },
	{ id: 2, name: 'Jane Smith', description: 25 },
	{ id: 3, name: 'Bob Johnson', description: 35 },
	{ id: 1, name: 'John Doe', description: 30 },
	{ id: 2, name: 'Jane Smith', description: 25 },
	{ id: 3, name: 'Bob Johnson', description: 35 }
]

const Product = () => {
	const navigate = useNavigate()

	const columns = [
		{
			Header: 'Image',
			accessor: 'image'
		},
		{
			Header: 'Name',
			accessor: 'name'
		},
		{
			Header: 'Category',
			accessor: 'category'
		},
		{
			Header: 'Price',
			accessor: 'price'
		},
		{
			Header: 'Offer Price',
			accessor: 'offerPrice'
		},
		// {
		// 	Header: 'Quantity',
		// 	accessor: 'quantity'
		// },
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
							onClick={() => navigate(`/admin/product/${productId}/edit`)} 
							className='animation-icon'
						/>
			
						<FontAwesomeIcon 
							icon={faTrash} 
							className='animation-icon' 
						/>
					</>
				)
			}
		}
	]

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
