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
			listCategory: data
		}
	},

	deleteCategory(axiosJwt, id) {
		return async (dispatch) => {
			const response = await ManageProductService.deleteCategory(axiosJwt, id)

			if (response.success) {
				dispatch(this.deleteCategorySuccess(id))
				showToast('success', `Delete category '${response.data?.name}' success?`)
			} else if (response.type === 'exist') {
				showToast('error', 'Delete category fail because exist product?')
				
			}
			
		}
	},

	deleteCategorySuccess(id) {
		return {
			type: MangeProductConstant.DELETE_CATEGORY_SUCCESS,
			id
		} 
	},

	getListProduct(axiosJwt, search) {
		return async dispatch => {
			const response = await ManageProductService.getListProduct(axiosJwt, search)

			dispatch(this.getListProductSuccess(response))
		}
	},

	getListProductSuccess(data) {
		return {
			type: MangeProductConstant.GET_PRODUCT_SUCCESS,
			listProduct: data
		}
	},

	deleteProduct(axiosJwt, id) {
		return async (dispatch) => {
			const response = await ManageProductService.deleteProduct(axiosJwt, id)

			if (response.success) {
				dispatch(this.deleteProductSuccess(id))
				showToast('success', `Delete product '${response.data?.name}' success?`)
			}
			
		}
	},

	deleteProductSuccess(id) {
		return {
			type: MangeProductConstant.DELETE_PRODUCT_SUCCESS,
			id
		} 
	}
  
}

export default ManageProductAction

