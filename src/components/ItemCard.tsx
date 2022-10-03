import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import { Item } from 'stores/ShopStore'

export const ItemCard = (item: Item) => {
	return (
		<Card sx={{ height: 1 }}>
			<CardActionArea
				sx={theme => ({
					height: 1,
					display: 'flex',
					justifyContent: 'initial',
					[theme.breakpoints.down('sm')]: {
						'.MuiCardMedia-root': { width: 0.4 },
					},
					[theme.breakpoints.up('sm')]: {
						flexDirection: 'column',
						alignItems: 'start',
						'.MuiCardMedia-root': { width: 1 },
					}
				})}
			>
				<CardMedia component='img' image={item.img} alt={item.label} />
				<CardContent>
					<Typography sx={{ fontSize: 20, fontWeight: 500 }}>
						{item.label}
					</Typography>
					<Typography>{item.description}</Typography>
					<Typography>{item.price.toFixed(2) + 'e'}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
