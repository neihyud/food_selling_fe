import DashboardConstant from '../../constant/DashboardConstant'
import DashboardService from '../../services/DashboardService'

import { showToast } from '../../helper/toast'
const DashboardAction = {
	setTypeContentComponent(typeContentComponent) {
		return {
			type: DashboardConstant.SET_TYPE_CONTENT_COMPONENT,
			typeContentComponent
		}
	},
	getListAddress(axiosJwt) {
		return async (dispatch) => {
			const response = await DashboardService.getListAddress(axiosJwt)

			dispatch(this.getListAddressSuccess(response.data))
		} 
	},
	getListAddressSuccess(data) {
		return {
			type: DashboardConstant.GET_LIST_ADDRESS_SUCCESS,
			listAddress: data
		}
	},
	getInfoUser(axiosJwt) {
		return async (dispatch) => {
			const response = await DashboardService.getInfoUser(axiosJwt)

			dispatch(this.getInfoUserSuccess(response.data))
		} 
	},
	getInfoUserSuccess(data) {
		return {
			type: DashboardConstant.GET_INFO_USER_SUCCESS,
			infoUser: data
		}
	},
	updateUser(axiosJwt, data) {
		return async (dispatch) => {
			const response = await DashboardService.updateUser(axiosJwt, data)

			if (response.success) {
				showToast('success')
				dispatch(this.updateUserSuccess(data))
				dispatch(this.setIsEdit(false))
			}

		}
	},
	updateUserSuccess(data) {
		return {
			type: DashboardConstant.UPDATE_USER_SUCCESS,
			data
		}
	},
	setIsEdit(isEdit) {
		return {
			type: DashboardConstant.SET_IS_EDIT,
			isEdit
		}
	},
	setTypeUIAddress(type) {
		return {
			type: DashboardConstant.SET_TYPE_UI_ADDRESS,
			typeUIAddress: type
		}
	},
	addAddress(axiosJwt, data) {
		return async dispatch => {
			const response = await DashboardService.addAddress(axiosJwt, data)

			if (response.success) {
				dispatch({
					type: DashboardConstant.SET_ADD_ADDRESS_SUCCESS,
					data
				})

				dispatch(this.setTypeUIAddress(''))
				showToast('success')
			}
		}
	},
	removeAddress(axiosJwt, id) {
		return async dispatch => {
			const response = await DashboardService.removeAddress(axiosJwt, id)

			if (response.success) {
				dispatch({
					type: DashboardConstant.SET_REMOVE_ADDRESS_SUCCESS,
					id
				})
				showToast('success')
			}
		}
	},
	editAddress(axiosJwt, data) {
		return async dispatch => {
			const response = await DashboardService.editAddress(axiosJwt, data)

			if (response.success) {
				dispatch({
					type: DashboardConstant.SET_UPDATE_ADDRESS_SUCCESS,
					data
				})
				dispatch(this.setTypeUIAddress(''))
				showToast('success')
			}
		}
	},
	getListOrder(axiosJwt) {
		return async dispatch => {
			const response = await DashboardService.getListOrder(axiosJwt)

			dispatch(this.getListOrderSuccess(response))
		}
	},
	getListOrderSuccess(data) {
		return { 
			type: DashboardConstant.GET_LIST_ORDER_SUCCESS,
			listOrder: data
		}
	},
	getListOrderItem(axiosJwt, orderId) {
		return async dispatch => {
			const response = await DashboardService.getListOrderItem(axiosJwt, orderId)

			dispatch({
				type: DashboardConstant.GET_LIST_ORDER_ITEM_SUCCESS,
				listOrderItem: response
			})
		}
	}
	
}

export default DashboardAction

