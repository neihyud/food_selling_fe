import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './components/GlobalStyles/globalStyles.css'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<Provider store={store()}>
		<App />
	</Provider>
	// </React.StrictMode>
)
