import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import {
	AppBar,
	Toolbar,
	Button,
	MenuItem,
	Typography,
	Box,
	styled,
	IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { ReactComponent as Logo } from 'icons/Logo.svg'
import { useStoreContext } from 'contexts/StoreContext'
import MenuIconButton from './MenuIconButton'

const Header = () => {
	const { appStore } = useStoreContext()

	const NavButton = styled(Button)(({ theme }) => ({
		fontSize: 20,
		fontWeight: theme.typography.fontWeightRegular,
		color: 'inherit',
		'&.active': theme.palette.mode === 'dark' && {
			color: theme.palette.primary.main,
		},
	})) as typeof Button

	const MenuButton = styled(MenuItem)(({ theme }) => ({
		fontWeight: 500,
		'&.active': { color: theme.palette.primary.main },
	})) as typeof MenuItem

	return (
		<AppBar>
			<Toolbar sx={{ p: 1 }}>
				<Logo height={48} width={48} />
				<Typography variant='h1' sx={{ pl: 1, flexGrow: 1, fontSize: 32 }}>
					Online Shop
				</Typography>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<Box sx={{ pr: 1 }}>
						<NavButton component={NavLink} to='/home' variant='text'>
							Home
						</NavButton>
						{appStore.loggedIn ? (
							<NavButton component={NavLink} to='/account' variant='text'>
								Account
							</NavButton>
						) : (
							<NavButton component={NavLink} to='/login' variant='text'>
								Login
							</NavButton>
						)}
						{appStore.admin ? (
							<NavButton component={NavLink} to='/new' variant='text'>
								Add new
							</NavButton>
						) : (
							<IconButton
								component={NavLink}
								to='/shoppingcart'
								sx={{ color: 'inherit' }}
							>
								<ShoppingCartIcon />
							</IconButton>
						)}
					</Box>
				</Box>
				<MenuIconButton
					sx={{ color: 'inherit', display: { sm: 'none' } }}
					icon={<MenuIcon />}
				>
					<MenuButton component={NavLink} to='/home'>
						Home
					</MenuButton>
					{appStore.loggedIn ? (
						<MenuButton component={NavLink} to='/account'>
							Account
						</MenuButton>
					) : (
						<MenuButton component={NavLink} to='/login'>
							Login
						</MenuButton>
					)}
					{appStore.admin ? (
						<MenuButton component={NavLink} to='/new'>
							Add new
						</MenuButton>
					) : (
						<MenuItem
							component={NavLink}
							to='/shoppingcart'
							sx={{ color: 'inherit', justifyContent: 'center' }}
						>
							<ShoppingCartIcon />
						</MenuItem>
					)}
				</MenuIconButton>
			</Toolbar>
		</AppBar>
	)
}

export default observer(Header)
