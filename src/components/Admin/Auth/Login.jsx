import { useNavigate } from 'react-router-dom'
import Auth from './Auth.jsx'

import './auth.css'

import { createAxiosNoJwt } from '../../../../createInstance.js'
import AuthService from '../../../services/admin/AuthService.js'
import LocalStorageService from '../../../services/LocalStorageService.js'
import useFormAuth from '../../../hooks/useFormAuth.jsx'

const Login = () => {
	const axiosNoJwt = createAxiosNoJwt()
	const navigate = useNavigate()

	const fieldsConfig = {
		username: {
			validates: [
				(value) => {
					if (value) {
						return ''
					}

					return 'Field is required'
				}
			]
		},
		password: {
			validates: [
				(value) => {
					const alphabeticRegExp = /(?=.*?[a-zA-Z])/
					const digitsRegExp = /(?=.*?[0-9])/
					const minLengthRegExp = /.{7,}/
					const alphabeticPassword = alphabeticRegExp.test(value)
					const digitsPassword = digitsRegExp.test(value)
					const minLengthPassword = minLengthRegExp.test(value)
					if (!alphabeticPassword ||
						!digitsPassword ||
						!minLengthPassword
					) {
						return 'Please enter 7 or more characters, using both numeric and alphabetic'
					}

					return ''
				}
			]
		}
	}

	const { credentials, validateForm, handleChange, handleBlur, error, setError, hasDisableBtnSubmit } = useFormAuth(fieldsConfig)

	const handleLogin = async() => {
		if (validateForm(credentials)) {
			const response = await AuthService.handleLogin(axiosNoJwt, credentials)

			if (response.success) {
				LocalStorageService.setToken(response.accessToken)
				LocalStorageService.setUser(response.user)

				navigate('/')
			} else if (response.errors) {
				setError(response.errors)
			}
		}
	}

	return (
		<Auth>
			<h2>{'Login'}</h2>
			<div className="form-group">
				<label className="form-label">Username</label>
				<input
					name="username"
					type="text"
					placeholder="User name"
					className="form-control"
					value={credentials?.username}
					onChange={handleChange}
					onBlur={handleBlur}
					autoFocus
				/>
				<span className="form-message">{error?.username}</span>
			</div>
			<div className="form-group">
				<label className="form-label">Password</label>
				<input
					name="password"
					type="password"
					placeholder="Password"
					className="form-control"
					value={credentials?.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<span className="form-message">{error?.password}</span>
			</div>

			<button
				className="form-submit w-100"
				onClick={handleLogin}
				disabled={hasDisableBtnSubmit()}
			>
				Login
			</button>
		</Auth>
	)
}

export default Login
