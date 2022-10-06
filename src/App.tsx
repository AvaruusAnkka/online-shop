import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import Header from 'components/Header'
import Home from 'routes/Home'
import Login from 'routes/Login'
import Account from 'routes/Account'
import ShoppingCart from 'routes/ShoppingCart'
import AddNew from 'routes/AddNew'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate replace to='/' />} />
			<Route path='/' element={<Navigate replace to='/home' />} />
			<Route path='home' element={<Home />} />
			<Route path='login' element={<Login />} />
			<Route path='account' element={<Account />} />
			<Route path='shoppingcart' element={<ShoppingCart />} />
			<Route path='new' element={<AddNew />} />
		</Routes>
	)
}

export default function App() {
	const { appStore } = useStoreContext()

	return (
		<Router>
			<Header />
			<AppRoutes />

			<Backdrop open={appStore.isLoading}>
				<CircularProgress />
			</Backdrop>
		</Router>
	)
}
