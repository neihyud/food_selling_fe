import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'

function DataTable({ columns, data }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	})

	const navigate = useNavigate()

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
								if (cell.column.id === 'icon') {
									return (
										<td key={id} {...cell.getCellProps()}>
											<FontAwesomeIcon icon={faEdit} onClick={() => navigate(`/admin/category/${productId}/edit`) }/>
											<FontAwesomeIcon icon={faTrash} />
										</td>
									)
								} 

								return <td key={id} {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
