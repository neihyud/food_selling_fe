import { useNavigate } from 'react-router-dom'
import DataTable from '../Category/DataTable'

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

const Product = () => {
	const navigate = useNavigate()
	return (
		<section className="section">
			<div className="section-header">
				<h1>Product Categories</h1>
			</div>

			<div className="card card-primary">
				<div className="card-header">
					<h4>All Categories</h4>
					<div className="card-header-action">
						<button className="btn btn-primary" onClick={() => navigate('/admin/product/create')}>
							Create new
						</button>
					</div>
				</div>
				<div className="card-body">
					<DataTable columns={columns} data={data} />
				</div>
			</div>
		</section>
	)
}

export default Product
