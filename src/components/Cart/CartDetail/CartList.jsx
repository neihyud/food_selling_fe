import CartItemList from './CartItemList'

const CartList = () => {
	const cartItemList = [
		{
			imgUrl: 'src/assets/images/blog_details_slider_img_1.jpg',
			detail: 'test',
			price: 80,
			quantity: 3,
			total: 200
		},
		{
			imgUrl: 'src/assets/images/blog_details_slider_img_1.jpg',
			detail: 'test',
			price: 80,
			quantity: 3,
			total: 200
		},
		{
			imgUrl: 'src/assets/images/blog_details_slider_img_1.jpg',
			detail: 'test',
			price: 80,
			quantity: 3,
			total: 200
		},
		{
			imgUrl: 'src/assets/images/blog_details_slider_img_1.jpg',
			detail: 'test',
			price: 80,
			quantity: 3,
			total: 200
		}
	]

	const renderCartItem = cartItemList.map((item, index) => {
		return <CartItemList key={index} {...item} />
	})

	return (
		<div className="table-responsive">
			<table className="table fp__cart_list">
				<thead>
					<tr className="text-center">
						<th scope="col" className="th-left border-0 bg-light">
							<div className="p-2 text-uppercase">Product</div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="p-2 text-uppercase"></div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="py-2 text-uppercase">Price</div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="py-2 text-uppercase">Quantity</div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="py-2 text-uppercase">Total</div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="py-2 text-uppercase">Remove</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{renderCartItem}
				</tbody>
			</table>
		</div>
	)
}

export default CartList
