import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import { ReactComponent as Logo } from 'icons/Logo.svg'

const Login = () => {
	const { firebaseStore } = useStoreContext()
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showError, setShowError] = useState(false)

	return (
		<Container
			sx={{
				width: 340,
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<Logo height={240} width={240} style={{ marginInline: 'auto' }} />
			<TextField
				label='Name'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				autoComplete='off'
			/>
			<TextField
				label='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				autoComplete='off'
				type='password'
			/>
			{showError && (
				<Typography
					sx={{
						color: (theme) => theme.palette.error.main,
						fontWeight: 500,
						textAlign: 'center',
					}}
				>
					Email or password is incorrect
				</Typography>
			)}
			<Button
				onClick={async () => {
					const signedIn = await firebaseStore.signIn(email, password)
					if (signedIn) navigate('/home')
					setShowError(!signedIn)
				}}
			>
				Sign In
			</Button>
			<Button>Create Account</Button>
		</Container>
	)
}

export default Login
