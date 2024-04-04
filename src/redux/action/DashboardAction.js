import DashboardConstant from '../../constant/DashboardConstant'
import DashboardService from '../../services/DashboardService'

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
	}
}

export default DashboardAction

