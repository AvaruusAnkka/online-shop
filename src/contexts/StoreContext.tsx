import { createContext, useContext } from 'react'
import RootStore from 'stores/RootStore'

const rootStore = new RootStore()
const StoreContext = createContext(rootStore)

export const StoreContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
	)
}

export const useStoreContext = () => {
	return useContext(StoreContext)
}
