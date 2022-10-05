import { makeAutoObservable } from 'mobx'

export default class AppStore {
	private _isDarkTheme = false
	private _isLoading = false
	private _loggedIn = false
	private _admin = false

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

	get loggedIn() {
		return this._loggedIn
	}

	get admin() {
		return this._admin
	}
}
