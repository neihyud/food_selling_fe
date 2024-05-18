import Papa from 'papaparse'

const useFetch = () => {

	const sanitizeColumns = (data, additionalData) => {
		return data.map((item) => {
			const sanitizedItem = {}
			Object.keys(item).forEach(key => {
				const sanitizedKey = key.toLowerCase().replace(/(\s|-)+/g, '_')
				sanitizedItem[sanitizedKey] = item[key]
			})
			return { ...sanitizedItem, ...additionalData }
		}).filter(Boolean)
	}

	const fetchCsvData = async (filePath, callback, additionalData = {}) => {
		const response = await fetch(filePath)
		const reader = response.body.getReader()
		const result = await reader.read()
		const decoder = new TextDecoder('utf-8')
		const csvString = decoder.decode(result.value)
		const { data } = Papa.parse(csvString, {
			header: true,
			dynamicTyping: true
		})
		const sanitizedData = sanitizeColumns(data, additionalData)
		callback(sanitizedData)
	}

	return { fetchCsvData }

}

export default useFetch
