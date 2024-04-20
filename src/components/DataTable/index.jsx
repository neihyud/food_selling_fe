import PropTypes from 'prop-types'
import { useTable } from 'react-table'

function DataTable({ columns, data }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow
	} = useTable({
		columns,
		data
	})

	// const handleGetIdImg = (pathGDrive) => {
	// 	const idIndex = pathGDrive.indexOf('id=')
	// 	if (idIndex !== -1) {
	// 		const ampersandIndex = pathGDrive.indexOf('&', idIndex)
    
	// 		return pathGDrive.substring(idIndex + 3, ampersandIndex !== -1 ? ampersandIndex : undefined)
	// 	} 

	// 	return pathGDrive.replace('file/d', 'thumbnail?id=')
	// }

	const getRow = (cell, id, productId) => {
		switch (cell.column.type) {
			case 'action':
				return (
					<td key={id} {...cell.getCellProps()}>
						{cell.column.getComponent(productId, cell.value)} 
					</td>
				)
			case 'image':
				// const idImg = handleGetIdImg(cell.value)

				return (
					<td key={id} {...cell.getCellProps()} width={80}>
						{/* <img src={`https://drive.google.com/thumbnail?id=${idImg}`} alt="Not found image"></img> */}
						<img src={cell.value} alt="Not found image" className='no-default' width={80} height={80} />
					</td>
				)
			default:
				return <td key={id} {...cell.getCellProps()}>{cell.render('Cell')}</td>

		}
	}
	return (
		<table {...getTableProps()} className="table">
			<thead>
				{headerGroups.map((headerGroup, index) => (
					<tr key={index} {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column, idx) => (
							<th key={idx} {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, index) => {
					prepareRow(row)

					const productId = row.original.id
					
					return (
						<tr key={index} {...row.getRowProps()}>
							{row.cells.map((cell, id) => {
								{return getRow(cell, id, productId)}
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

DataTable.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object),
	data: PropTypes.arrayOf(PropTypes.object)
}
export default DataTable
