import PageConstant from '../../../constant/admin/PageConstant'

const PageAction = {
	setKeyPathMenu(keyPathMenu) {
		return {
			type: PageConstant.SET_KEY_PATH_MENU,
			keyPathMenu
		}
	},
  
}

export default PageAction
