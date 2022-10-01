import { observer } from 'mobx-react-lite'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import muiTheme from './muiTheme'

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const { appStore } = useStoreContext()
	const theme = muiTheme(appStore.isDarkTheme)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}

export default observer(MuiThemeProvider)
