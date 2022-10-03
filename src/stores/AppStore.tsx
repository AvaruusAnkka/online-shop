import { makeAutoObservable } from 'mobx'
import Home from 'routes/Home'
import Admin from 'routes/Admin'
import Login from 'routes/Login'

export default class AppStore {
	private _isDarkTheme = true
	private _isLoading = false
	private _routes = [
		{ label: 'Home', path: '/home', element: <Home /> },
		{ label: 'Admin', path: '/admin', element: <Admin /> },
		{ label: 'Login', path: '/login', element: <Login /> },
	]

	constructor() {
		makeAutoObservable(this)
	}

	get isDarkTheme() {
		return this._isDarkTheme
	}

	toggleDarkTheme = () => {
		this._isDarkTheme = !this._isDarkTheme
	}

	get isLoading() {
		return this._isLoading
	}

	set isLoading(value) {
		this._isLoading = value
	}

	get routes() {
		return this._routes
	}
}
