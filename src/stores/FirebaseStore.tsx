import { makeAutoObservable } from 'mobx'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
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

	async signIn(email: string, password: string) {
		try {
			const userCredential = await signInWithEmailAndPassword(
				this._auth,
				email,
				password
			)
			this.currentUser = userCredential.user.email
			return true
		} catch (error) {
			return false
		}
	}

	async signOut() {
		await signOut(this._auth)
	}
}
