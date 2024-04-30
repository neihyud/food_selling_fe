import React from 'react'

const OrderPrint = (props, ref) => {
	return (
		<div ref={ref}>OrderPrint</div> 
	)
}

export default React.forwardRef(OrderPrint)
