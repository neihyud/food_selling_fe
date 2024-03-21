import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import WrapperContent from '../WrapperContent'

const ProductManagement = () => {
	const { id } = useParams()

	useEffect(() => {
		if (id) {
			// to do load current product
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<WrapperContent
			title='Product'
			subTitle='Create Product'
		>
			<div>
				<div className="form-group">
					<label>Image</label>
					<div id="image-preview" className="image-preview">
						<label htmlFor="image-upload" id="image-label">Choose File</label><br />
						<input type="file" name="image" />
					</div>
				</div>

				<div className="form-group">
					<label>Name</label>
					<input type="text" name="name" className="form-control input-primary" />
				</div>

				<div className="form-group">
					<label>Category</label>
					<select name="category" className="form-control select" value={'Select'}>
						<option value="1">{1}</option>
						<option value="2">{2}</option>
						<option value="3">{3}</option>
					</select>
				</div>

				<div className="form-group">
					<label>Price</label>
					<input type="text" name="price" className="form-control input-primary" />
				</div>

				<div className="form-group">
					<label>Offer Price</label>
					<input type="text" name="offer_price" className="form-control input-primary" />
				</div>

				<div className="form-group">
					<label>Quantity</label>
					<input type="text" name="quantity" className="form-control input-primary" />
				</div>

				<div className="form-group">
					<label>Short Description</label>
					<textarea name="short_description" className="form-control input-primary" >{'short_description'}</textarea>
				</div>

				<div className="form-group">
					<label>Long Description</label>
					<textarea name="long_description" className="form-control summernote input-primary" >{'long_description'}</textarea>
				</div>

				<div className="form-group">
					<label>Sku</label>
					<input type="text" name="sku" className="form-control input-primary" />
				</div>

				<div className="form-group">
					<label>Status</label>
					<select name="status" className="form-control input-primary" >
						<option value="1">Active</option>
						<option value="0">Inactive</option>
					</select>
				</div>

				<button type="submit" className="btn btn-primary">Create</button>
			</div>
		</WrapperContent>
	
	)
}

export default ProductManagement
