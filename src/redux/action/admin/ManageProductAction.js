import MangeProductConstant from '../../../constant/admin/MangeProductConstant'
import { showToast } from '../../../helper/toast'

import ManageProductService from '../../../services/admin/ManageProductService'

const ManageProductAction = {
	/**
	 * get category 
	 * @param {*} axiosJwt 
	 * @returns 
	 */
	getListCategory(axiosJwt) {
		return async (dispatch) => {
			const response = await ManageProductService.getListCategory(axiosJwt)

			dispatch(this.getListCategorySuccess(response))
		}
	},

	/**
	 * get category success
	 * @returns 
	 */
	getListCategorySuccess(data) {
		return {
			type: MangeProductConstant.GET_CATEGORY_SUCCESS,
			listData: data
		}
	},

	deleteCategory(axiosJwt, id) {
		return async (dispatch) => {
			const response = await ManageProductService.deleteCategory(axiosJwt, id)

			if (response.success) {
				dispatch(this.deleteCategorySuccess(id))
				showToast('success', `Delete category '${response.data?.name}' success?`)
			}
			
		}
	},

	deleteCategorySuccess(id) {
		return {
			type: MangeProductConstant.DELETE_CATEGORY_SUCCESS,
			id
		} 
	}
  
}

export default ManageProductAction

