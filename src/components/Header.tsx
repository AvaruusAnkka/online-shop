import { NavLink } from 'react-router-dom'
import {
	AppBar,
	Toolbar,
	Button,
	MenuItem,
	Typography,
	Box,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import MenuIconButton from './MenuIconButton'
import DarkThemeIconButton from './DarkThemeIconButton'
import { useStoreContext } from 'contexts/StoreContext'

const Header = () => {
	const { appStore } = useStoreContext()

	return (
		<AppBar>
			<Toolbar sx={{ p: 1 }}>
				<Typography variant='h1' sx={{ pl: 1, flexGrow: 1, fontSize: 32 }}>
					Online Shop
				</Typography>
				<Box
					sx={{
						display: {
							xs: 'none',
							sm: 'block',
						},
					}}
				>
					<Box sx={{ pr: 1 }}>
						{appStore.routes.map((route) => (
							<Button
								key={route.path}
								component={NavLink}
								to={route.path}
								variant='text'
								sx={(theme) => ({
									'&:hover': { bgcolor: 'transparent' },
									fontSize: '1.25rem',
									fontWeight: (theme) => theme.typography.fontWeightRegular,
									color: 'inherit',
									'&.active': theme.palette.mode === 'dark' && {
										color: theme.palette.primary.main,
									},
								})}
							>
								{route.label}
							</Button>
						))}
					</Box>
				</Box>
				<MenuIconButton
					sx={{
						color: 'inherit',
						display: {
							sm: 'none',
						},
					}}
					icon={<MenuIcon />}
				>
					{appStore.routes.map((route) => (
						<MenuItem
							key={route.path}
							component={NavLink}
							to={route.path}
							sx={{
								'&.active': (theme) => ({
									color: theme.palette.primary.main,
								}),
							}}
						>
							{route.label}
						</MenuItem>
					))}
				</MenuIconButton>
				<DarkThemeIconButton sx={{ color: 'inherit' }} />
			</Toolbar>
		</AppBar>
	)
}

export default Header
