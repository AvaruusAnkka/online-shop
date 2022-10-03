import { observer } from 'mobx-react-lite'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'

const Home = () => {
	const { shopStore } = useStoreContext()

	return (
		<Box sx={{ padding: 4 }}>
			<Grid container spacing={4}>
				{shopStore.items.map((item) => {
					return (
						<Grid
							key={item.id}
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
						>
							<Paper sx={{ display: 'flex', img: { maxWidth: 0.5 } }}>
								<img src={item.img} alt={item.label} loading='lazy' />
								<Box sx={{ p: 1 }}>
									<Typography sx={{ fontSize: 20, fontWeight: 500 }}>
										{item.label}
									</Typography>
									<Typography>{item.description}</Typography>
									<Typography>{item.price.toFixed(2) + 'e'}</Typography>
								</Box>
							</Paper>
						</Grid>
					)
				})}
			</Grid>
		</Box>
	)
}

export default observer(Home)
