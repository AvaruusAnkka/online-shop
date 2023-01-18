import { makeAutoObservable } from 'mobx'
import AppStore from './AppStore'
import FirebaseStore from './FirebaseStore'
import ShopStore from './ShopStore'

export default class RootStore {
	appStore = new AppStore()
	firebaseStore = new FirebaseStore()
	shopStore = new ShopStore()

	constructor() {
		makeAutoObservable(this)
	}
}
