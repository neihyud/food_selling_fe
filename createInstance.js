/* eslint-disable no-console */
import axios from 'axios'
import LocalStorageService from './src/services/LocalStorageService'

const BASE_URL = 'http://127.0.0.1:8080'

const createAxiosJwt = (type = '') => {
	const instance = axios.create({
		baseURL: BASE_URL,
		timeout: 10000
	})

	instance.interceptors.request.use(
		(config) => {
			let token = LocalStorageService.getToken()

			if (type === 'admin') {
				token = LocalStorageService.getTokenAdmin()
			}
			
			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)

	instance.interceptors.response.use(
		(response) => {
			return response
		},
		(error) => {
			if (error.response) {
				if (error.response.status === 401 || error.response.status === 403) {
					if (type === 'admin') {
						LocalStorageService.removeTokenAdmin()
						window.location.replace('/admin/login')
					} else {
						LocalStorageService.removeToken()
						window.location.replace('/login')
					}

				} else {
					console.log('error === ', error)
				}
			}
			return Promise.reject(error)
		}
	)

	return instance
}

const createAxiosNoJwt = () => {
	const instance = axios.create({
		baseURL: BASE_URL,
		timeout: 10000
	})

	return instance
}

export { createAxiosNoJwt, createAxiosJwt }
