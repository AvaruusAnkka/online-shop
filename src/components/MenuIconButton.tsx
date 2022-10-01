import { useState } from 'react'
import { IconButton, IconButtonProps, Menu } from '@mui/material'

interface Props extends IconButtonProps {
	icon: JSX.Element
}

const MenuIconButton = ({ icon, children, ...baseProps }: Props) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	return (
		<>
			<IconButton
				onClick={(e: React.MouseEvent<HTMLElement>) =>
					setAnchorEl(e.currentTarget)
				}
				{...baseProps}
			>
				{icon}
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClick={() => setAnchorEl(null)}
				onClose={() => setAnchorEl(null)}
			>
				{children}
			</Menu>
		</>
	)
}

export default MenuIconButton
