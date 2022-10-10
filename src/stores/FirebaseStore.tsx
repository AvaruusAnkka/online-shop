import { makeAutoObservable } from 'mobx'
import {
	AuthErrorCodes,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import firebaseApp from 'firebaseApp'

export default class FirebaseStore {
	private _db = getFirestore(firebaseApp)
	private _auth = getAuth(firebaseApp)
	private _currentUser: string | null = null

	constructor() {
		makeAutoObservable(this)
	}

	get currentUser() {
		return this._currentUser
	}

	set currentUser(value) {
		this._currentUser = value
	}

	async createAccount(email: string, password: string) {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				this._auth,
				email,
				password
			)
			this.currentUser = userCredential.user.uid
			return true
		} catch (error: any) {
			if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
				return 'Email already exists'
			}
			return false
		}
	}

	async signIn(email: string, password: string) {
		try {
			const userCredential = await signInWithEmailAndPassword(
				this._auth,
				email,
				password
			)
			this.currentUser = userCredential.user.uid
			return true
		} catch (error: any) {
			if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
				return 'Wrong password'
			}

			const copy = JSON.parse(JSON.stringify(AuthErrorCodes))
			for (const key in copy) {
				if (error.code === copy[key]) {
					console.log(key + ': ' + error.code);
				}
			}
			return false
		}
	}

	async signOut() {
		await signOut(this._auth)
	}
}
