import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PageAction from '../../../redux/action/admin/PageAction'

const SubMenu = (props) => {
	const { item, isClose, id, keyPath } = props
	
	const dispatch = useDispatch()
	const { keyPathMenu } = useSelector(state => state.admin.pageReducer)

	const navigate = useNavigate()

	const [isShowDropDown, setIsShowDropDown] = useState(false)

	const showDropDown = () =>{
		setIsShowDropDown(!isShowDropDown)
	}

	const handleNavigate = (path) => {
		navigate(path)
	}

	const handleClickDropDown = () => {
		handleNavigate(item.path)
		
		if (item?.children) {
			showDropDown()
		} else {
			dispatch(PageAction.setKeyPathMenu([...keyPath]))
		}
	}

	const getIconDrop = () => {
		if (item.children) {
			return	<i className={`icon-arrow ${isShowDropDown ? 'open' : ''}`}></i>
		}
		return null
	}

	useEffect(() => {
		if (isClose) {
			setIsShowDropDown(!isClose)
		}
	}, [isClose])

	const openClassName = (keyPathMenu && keyPathMenu.includes(id)) ? 'open' : ''
	
	return (
		<>
			<li className={`dropdown active ${isShowDropDown ? 'open' : ''}`} onClick={handleClickDropDown}>
				<div className={openClassName}>
					{
						(item.icon) && <FontAwesomeIcon icon={item.icon} />
					}
					<span className='nav-name'>{item.title}</span>
					{getIconDrop()}
				</div>
				{item.children && 
					<ul className="dropdown-menu" onClick={(event) => event.stopPropagation()}>
						{ 
							item.children.map((child, index) => {
								return (
									<SubMenu 
										key={index} 
										item={child} 
										isClose={!isShowDropDown} 
										id={child.key}
										keyPath={[...keyPath, child.key]}
									/>)
							})
						}
					</ul>
				}
			</li>
		</>
	)
}

SubMenu.propTypes = {
	item: PropTypes.object,
	isClose: PropTypes.bool,
	idMenuActive: PropTypes.number,
	setIdMenuActive: PropTypes.func,
	id: PropTypes.string,
	keyPath: PropTypes.arrayOf(PropTypes.string)
}

export default SubMenu
