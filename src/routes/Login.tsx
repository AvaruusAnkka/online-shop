import { useState } from 'react'
import { Button, Container, TextField } from '@mui/material'
import { ReactComponent as Logo } from 'icons/Logo.svg'

const Login = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

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
				value={name}
				onChange={(e) => setName(e.target.value)}
				autoComplete='off'
			/>
			<TextField
				label='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				autoComplete='off'
				type='password'
			/>
			<Button>Login</Button>
		</Container>
	)
}

export default Login
