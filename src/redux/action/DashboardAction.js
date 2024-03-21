import DashboardConstant from '../../constant/DashboardConstant'

const DashboardAction = {
	setTypeContentComponent(typeContentComponent) {
		return {
			type: DashboardConstant.SET_TYPE_CONTENT_COMPONENT,
			typeContentComponent
		}
	}
}

export default DashboardAction

