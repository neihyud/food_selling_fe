import './menu.css'
import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const SubMenu = ({ item, isClose }) => {
	const navigate = useNavigate()
	const [isShowDropDown, setIsShowDropDown] = useState(false)

	const showDropDown = () => setIsShowDropDown(!isShowDropDown)

	const getIconDrop = () => {
		if (item.children && !isShowDropDown) {
			return <FontAwesomeIcon icon={faCaretDown}/>
           
		} else if (item.children && isShowDropDown) {
			return <FontAwesomeIcon icon={faCaretUp}/>
             
		}
		return null
	}

	useEffect(() => {
		if (isClose) {
			setIsShowDropDown(!isClose)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isClose])

	const handleNavigate = (path) => {
		navigate(path)
	}

	// const is 
	return (
		<>
			<li className={`dropdown active ${isShowDropDown ? 'open' : ''}`} onClick={showDropDown}>
				<div onClick={() => handleNavigate(item.path)}>
					{
						(item.icon) && <FontAwesomeIcon icon={item.icon} />
					}
					<span>{item.title}</span>
					{getIconDrop()}
				</div>
				{item.children && 
					<ul className="dropdown-menu" onClick={(event) => event.stopPropagation()}>
						{ 
							item.children.map((child, index) => {
								return (<SubMenu key={index} item={child} isClose={!isShowDropDown}/>)
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
	isClose: PropTypes.bool
  
}

export default SubMenu
