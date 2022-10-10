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
	const [emailErrorText, setEmailErrorText] = useState('')
	const [passwordErrorText, setPasswordErrorText] = useState('')
	const [errorText, setErrorText] = useState('')

	const reset = () => {
		setEmail('')
		setPassword('')
		setEmailErrorText('')
		setPasswordErrorText('')
		setErrorText('')
	}

	const inputsAreValid = () => {
		if (!email) {
			setEmailErrorText('Email is required')
			return false
		}
		if (!email.match(/^\S+@\S+\.\S{2,3}$/)) {
			setEmailErrorText('Email is not valid')
			return false
		}
		setEmailErrorText('')

		if (!password) {
			setPasswordErrorText('Password is required')
			return false
		}
		setPasswordErrorText('')

		return true
	}

	const newAccountIsValid = () => {
		if (!inputsAreValid()) return false
		if (password.length < 6) {
			setPasswordErrorText('Password must be at least 6 characters')
			return false
		}
		return true
	}

	const onSignIn = async () => {
		if (!inputsAreValid()) return

		const signedIn = await firebaseStore.signIn(email, password)

		if (typeof signedIn === 'string') {
			setPasswordErrorText(signedIn)
			return
		}

		if (signedIn) {
			reset()
			navigate('/home')
		} else setErrorText('Email or password is incorrect')
	}

	const onCreateAccount = async () => {
		if (!newAccountIsValid()) return

		const accountCreated = await firebaseStore.createAccount(email, password)

		if (typeof accountCreated === 'string') {
			setErrorText(accountCreated)
			return
		}

		if (accountCreated) {
			reset()
			navigate('/home')
		} else setErrorText("Account couldn't be created")
	}

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
				label='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') onSignIn()
				}}
				error={!!emailErrorText}
				helperText={emailErrorText}
				autoComplete='off'
			/>
			<TextField
				label='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') onSignIn()
				}}
				error={!!passwordErrorText}
				helperText={passwordErrorText}
				autoComplete='off'
				type='password'
			/>
			{errorText && (
				<Typography
					sx={{
						color: (theme) => theme.palette.error.main,
						fontWeight: 500,
						textAlign: 'center',
					}}
				>
					{errorText}
				</Typography>
			)}
			<Button onClick={onSignIn}>Sign In</Button>
			<Button onClick={onCreateAccount}>Create Account</Button>
		</Container>
	)
}

export default Login
