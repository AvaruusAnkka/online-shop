import { makeAutoObservable } from 'mobx'
import AppStore from './AppStore'
import ShopStore from './ShopStore'

export default class RootStore {
	appStore = new AppStore()
	shopStore = new ShopStore()

	constructor() {
		makeAutoObservable(this)
	}
}
