import { makeAutoObservable } from 'mobx'

const emptyImage = 'https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='

export interface Item {
	id: string
	label: string
	price: number
	description: string
	img: string
}

export default class ShopStore {
	private _items: Item[] = [
		{
			id: '1',
			label: 'name1',
			price: 7,
			description: 'A little bit longer description to preview UI',
			img: emptyImage,
		},
		{
			id: '2',
			label: 'name2',
			price: 10,
			description: 'description',
			img: emptyImage,
		},
		{
			id: '3',
			label: 'name3',
			price: 10.50,
			description: 'description',
			img: emptyImage,
		},
		{
			id: '4',
			label: 'name4',
			price: 28.99,
			description: 'description',
			img: emptyImage,
		},
		{
			id: '5',
			label: 'name5',
			price: 99.99,
			description: 'description',
			img: emptyImage,
		},
	]

	constructor() {
		makeAutoObservable(this)
	}

	get items() {
		return this._items
	}
}
