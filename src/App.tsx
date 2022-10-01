import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import Header from 'components/Header'

const AppRoutes = () => {
	const { appStore } = useStoreContext()

	return (
		<Routes>
			<Route
				path='/'element={<Navigate replace to='/home' />}
			/>
			{appStore.routes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
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
