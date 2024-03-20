import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductManagement = () => {
	const { id } = useParams()

	useEffect(() => {
		if (id) {
			// to do load current product
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
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
				<input type="text" name="name" className="form-control" placeholder="{'name') }"/>
			</div>

			<div className="form-group">
				<label>Category</label>
				<select name="category" className="form-control select2" >
					<option value="">select</option>
					<option value="1">{1}</option>
					<option value="2">{2}</option>
					<option value="3">{3}</option>
				</select>
			</div>

			<div className="form-group">
				<label>Price</label>
				<input type="text" name="price" className="form-control" placeholder="{'price') }"/>
			</div>

			<div className="form-group">
				<label>Offer Price</label>
				<input type="text" name="offer_price" className="form-control" placeholder="offer_price"/>
			</div>

			<div className="form-group">
				<label>Quantity</label>
				<input type="text" name="quantity" className="form-control" placeholder="quantity"/>
			</div>

			<div className="form-group">
				<label>Short Description</label>
				<textarea name="short_description" className="form-control" >{'short_description'}</textarea>
			</div>

			<div className="form-group">
				<label>Long Description</label>
				<textarea name="long_description" className="form-control summernote" >{'long_description'}</textarea>
			</div>

			<div className="form-group">
				<label>Sku</label>
				<input type="text" name="sku" className="form-control" placeholder="{'sku') }"/>
			</div>

			<div className="form-group">
				<label>Seo Title</label>
				<input type="text" name="seo_title" className="form-control" placeholder="{'seo_title') }"/>
			</div>

			<div className="form-group">
				<label>Seo Description</label>
				<textarea name="seo_description" className="form-control" >{'seo_description'}</textarea>
			</div>

			<div className="form-group">
				<label>Show at Home</label>
				<select name="show_at_home" className="form-control" >
					<option value="1">Yes</option>
					<option selected value="0">No</option>
				</select>
			</div>

			<div className="form-group">
				<label>Status</label>
				<select name="status" className="form-control" >
					<option value="1">Active</option>
					<option value="0">Inactive</option>
				</select>
			</div>

			<button type="submit" className="btn btn-primary">Create</button>
		</div>
	)
}

export default ProductManagement
