import { useEffect, useState } from 'react'
import WrapperContent from '../WrapperContent'
import DataTable from '../../DataTable'
import { createAxiosJwt } from '../../../../createInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import ModalCustom from '../../Modal/ModalCustom'
import { showToast } from '../../../helper/toast'

const Slider = () => {
	const [listSlider, setListSlider] = useState([])
	const axiosJwt = createAxiosJwt('admin')
	const navigate = useNavigate()
	const [isShowModal, setIsShowModal] = useState(false)
	const [currentIdSlider, setCurrentIdSlider] = useState()

	const handleOpenModal = (sliderId) => {
		setIsShowModal(true)
		setCurrentIdSlider(sliderId)
	}
	const columns = [
		{
			Header: 'Image',
			accessor: 'img',
			type: 'image'
		},
		{
			Header: 'Title',
			accessor: 'title'
		},
		{
			Header: 'Action',
			accessor: 'action',
			type: 'action',
			getComponent: (sliderId) => {
				return (
					<>
						<FontAwesomeIcon 
							icon={faEdit} 
							onClick={() => navigate(`/admin/setting/slider/${sliderId}/edit`)} 
							className='animation-icon'
						/>
			
						<FontAwesomeIcon 
							icon={faTrash} 
							className='animation-icon' 
							onClick={() => handleOpenModal(sliderId)}
						/>
					</>
				)
			}
		}
	]

	const getSlider = async () => {
		const response = await axiosJwt.get('admin/setting/slider')

		setListSlider(response.data)
	}

	useEffect(() => {
		getSlider()
	}, [])

	const action = (
		<button className="btn btn-primary" onClick={() => navigate('/admin/setting/slider/create')}>
			Create new
		</button>
	)

	const handleRemoveSlider = async () => {
		const response = await axiosJwt.delete(`/admin/setting/slider/${currentIdSlider}`)

		if (response?.data?.success) {
			showToast('success', 'Remove slider success!')

			const newListSlider = listSlider.filter((slider) => {
				return slider.id !== currentIdSlider
			})
    
			setListSlider(newListSlider)
		}
		setIsShowModal(false)
	}

	return (
		<WrapperContent
			title='Slider'
			subTitle='Slider'
			action={action}
		>
			<DataTable columns={columns} data={listSlider} />

			<ModalCustom 
				handleActionPrimary={handleRemoveSlider}
				handleActionSecondary={() => setIsShowModal(false)}
				isShow={isShowModal}
				content={'Do you want remove?'} 
				title={'Remove Slider'}
			/>
		</WrapperContent>
	)
}

export default Slider
