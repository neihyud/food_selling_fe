import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import WrapperContent from '../WrapperContent'

const CategoryManagement = () => {
	const { id } = useParams()

	useEffect(() => {
		if (id) {
			// to do load current category
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<WrapperContent
			title='Category'
			subTitle='Create Category'
		>
			<form>
				<div className="form-group">
					<label>Name</label>
					<input type="text" name="name" className="form-control input-primary" / >
				</div>

				<div className="form-group">
					<label>Description</label>
					<textarea className='form-control input-primary'>

					</textarea>
				</div>

				<div className="form-group">
					<label>Status</label>
					<select name="status" className="form-control">
						<option value="1">Active</option>
						<option value="0">Inactive</option>
					</select>
				</div>

				<button type="submit" className="btn btn-primary">Create</button>
			</form>
		</WrapperContent>
	
	)
}

export default CategoryManagement
