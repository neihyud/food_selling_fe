import { useState } from 'react'

const useForm = (fieldsConfig) => {
	const [error, setError] = useState({})
	const [dataForm, setDataForm] = useState({})

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

	const handleChange = (event, type) => {
		const field = event.target.name
		let value = ''

		switch (type) {
			case 'file':
				value = event.target.files[0]
				break
			default: 
				value = event.target.value
		}
		
		setDataForm({ 
			...dataForm,
			[field]: value 
		})
	}

	const handleBlur = (event) => {
		const field = event.target.name
		const value = event.target.value

		const errorMessage = validateField(field, value, dataForm)

		const valueField = errorMessage ? errorMessage : ''

		setError({
			...error,
			[field]: valueField
		})
	}

	const hasDisableBtnSubmit = () => {
		return Object.keys(fieldsConfig).some((field) => {
			
			if (!Object.prototype.hasOwnProperty.call(dataForm, field)) {
				return true
			}

			// if (!dataForm[field].trim()) {
			// 	return true
			// }

			return (Object.prototype.hasOwnProperty.call(error, field) && error[field])
		})
	}

	const handleSetDataForm = (data) => {
		setDataForm(data)
	}

	return { dataForm, handleSetDataForm, handleBlur, handleChange, error, setError, validateForm, hasDisableBtnSubmit }
}

export default useForm
