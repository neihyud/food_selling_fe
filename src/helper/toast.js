import { toast } from 'react-toastify'
/**
 * Enum for toast notification types.
 * @typedef {'success' | 'error' | 'warn' | 'info'} ToastType
 * @description Use these types to specify the type of toast notification you want to display.
 */

const configDefault = {
	position: 'top-center'
}

/**
 * Show toast
 * @param {ToastType} type 'success' | 'error' | 'warn' | 'info'
 * @param {string} message message
 * @param {object} config object config
 * @returns {object} object
 */
const showToast = (type, message = 'Success', config = configDefault) => {
	return toast[type](message, {
		...configDefault,
		...config
	})
}

export { showToast }
