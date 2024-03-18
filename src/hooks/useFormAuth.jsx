import { useState } from 'react'

const useFormAuth = (fieldsConfig) => {
	const [error, setError] = useState({})
	const [credentials, setCredentials] = useState({})

	const validateField = (field, value, object) => {
		let errorMessage = ''

		for (const validateFunction of fieldsConfig[field].validates) {
			errorMessage = validateFunction(value, object)
			if (errorMessage) {
				break
			}
		}

		return errorMessage
	}

	const validateForm = (object) => {
		const errors = {}

		Object.keys(fieldsConfig).forEach((field) => {
			const errorMessage = validateField(field, object[field], object)
			if (errorMessage) {
				errors[field] = errorMessage
			}
		})

		setError(errors)

		return !(errors && Object.keys(errors).length)
	}

	const handleChange = (event) => {
		const field = event.target.name
		const value = event.target.value

		setCredentials({ 
			...credentials,
			[field]: value 
		})
	}

	const handleBlur = (event) => {
		const field = event.target.name
		const value = event.target.value

		const errorMessage = validateField(field, value, credentials)

		const valueField = errorMessage ? errorMessage : ''

		setError({
			...error,
			[field]: valueField
		})
	}

	const hasDisableBtnSubmit = () => {
		return Object.keys(fieldsConfig).some((field) => {
			
			if (!Object.prototype.hasOwnProperty.call(credentials, field)) {
				return true
			}

			if (!credentials[field].trim()) {
				return true
			}

			return (Object.prototype.hasOwnProperty.call(error, field) && error[field])
		})
	}

	return { credentials, handleBlur, handleChange, error, setError, validateForm, hasDisableBtnSubmit }
}

export default useFormAuth
