import { makeAutoObservable } from 'mobx'

const emptyImage =
  'https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='

export enum Categories {
  All = 'All',
  Cloth = 'Cloth',
  Food = 'Food',
  Tech = 'Tech',
}

const dummyItems: Item[] = [
  {
    id: '1',
    label: 'name1',
    price: 7,
    description: 'A little bit longer description to preview UI',
    img: emptyImage,
    category: Categories.Cloth,
    qty: 1,
    status: 'Available',
  },
  {
    id: '2',
    label: 'name2',
    price: 10,
    description: 'description',
    img: emptyImage,
    category: Categories.Food,
    qty: 1,
    status: 'Available',
  },
  {
    id: '3',
    label: 'name3',
    price: 10.5,
    description: 'description',
    img: emptyImage,
    category: Categories.Tech,
    qty: 1,
    status: 'Available',
  },
  {
    id: '4',
    label: 'name4',
    price: 28.99,
    description: 'description',
    img: emptyImage,
    category: Categories.Cloth,
    qty: 0,
    status: 'Unavailable',
  },
  {
    id: '5',
    label: 'name5',
    price: 99.99,
    description: 'description',
    img: emptyImage,
    category: Categories.Tech,
    qty: 0,
    status: 'Coming soon',
  },
]

type ItemStatus = 'Available' | 'Unavailable' | 'Coming soon'

export interface Item {
  id: string
  label: string
  price: number
  description: string
  img: string
  category: Categories
  qty: number
  status: ItemStatus
}

export default class ShopStore {
  private _items: Item[] = dummyItems
  private _filtered: Item[] = this._items
  private _searchValue = ''
  private _selectedCategory = 'Category'

  constructor() {
    makeAutoObservable(this)
  }

  get items() {
    return this._items
  }

  get filteredItems() {
    this.filter()
    return this._filtered
  }

  get searchValue() {
    return this._searchValue
  }

  set searchValue(value) {
    this._searchValue = value
  }

  get selectedCategory() {
    return this._selectedCategory
  }

  set selectedCategory(value) {
    this._selectedCategory = value
  }

  get categoriesList() {
    let categories: string[] = ['All']
    this._items.forEach((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category)
      }
    })
    return categories
  }

  filter() {
    this._filtered = this._items.filter((item) => {
      if (
        this._selectedCategory === 'All' ||
        this._selectedCategory === 'Category'
      ) {
        return item.label
          .toLowerCase()
          .includes(this._searchValue.toLowerCase())
      } else {
        return (
          item.label.toLowerCase().includes(this._searchValue.toLowerCase()) &&
          item.category === this._selectedCategory
        )
      }
    })
  }
}
