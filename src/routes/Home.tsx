import { observer } from 'mobx-react-lite'
import { Box, Button, Typography } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import DarkThemeIconButton from 'components/DarkThemeIconButton'

const Home = () => {
	const { appStore } = useStoreContext()

	return (
		<Box sx={{ padding: 2 }}>
			<Typography variant='h1'>Home</Typography>
			<DarkThemeIconButton />
			<Button
				color='white'
				onClick={() => {
					appStore.isLoading = true
				}}
			>
				Button
			</Button>
		</Box>
	)
}

export default observer(Home)
