import AccountConstant from '../../../constant/admin/AccountConstant'
import { showToast } from '../../../helper/toast'
import AccountService from '../../../services/admin/AccountService'

const AccountAction = {
	getListStaff(axiosJwt) {
		return async dispatch => {
			const response = await AccountService.getListStaff(axiosJwt)

			dispatch(this.getListStaffSuccess(response))
		}
	},
	
	/**
	 * get category success
	 * @returns 
	 */
	getListStaffSuccess(data) {
		return {
			type: AccountConstant.GET_STAFF_SUCCESS,
			listStaff: data
		}
	},

	deleteAccount(axiosJwt, id) {
		return async (dispatch) => {
			const response = await AccountService.deleteAccount(axiosJwt, id)

			if (response.success) {
				dispatch(this.deleteAccountSuccess(id))
				showToast('success', `Delete account '${response.data?.name}' success?`)
			}
			
		}
	},

	deleteAccountSuccess(id) {
		return {
			type: AccountConstant.DELETE_ACCOUNT_SUCCESS,
			id
		} 
	}

}

export default AccountAction
