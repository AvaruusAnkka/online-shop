import { makeAutoObservable } from 'mobx'
import AppStore from './AppStore'

export default class RootStore {
	appStore = new AppStore()

	constructor() {
		makeAutoObservable(this)
	}
}
