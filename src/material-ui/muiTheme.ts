import { createTheme } from '@mui/material/styles'
import { breakpoints, palette } from './overrides'

const muiTheme = (isDarkTheme: boolean) => {
	const theme = createTheme({
		breakpoints: breakpoints,
		palette: {
			...palette,
			...(isDarkTheme
				? {
						mode: 'dark',
						primary: {
							main: '#BB85FC',
						},
						secondary: {
							main: '#10DAC6',
						},
				  }
				: {
						mode: 'light',
				  }),
		},
		mixins: {
			toolbar: {}, // This will get rid of minHeight styles
		},
		typography: {
			fontFamily: ['Open Sans', 'Roboto', 'Arial', 'sans-serif'].join(','),
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 700,
		},
		components: {
			MuiButton: {
				defaultProps: {
					variant: 'contained',
				},
			},
			MuiLink: {
				defaultProps: {
					underline: 'none',
				},
			},
			MuiAppBar: {
				defaultProps: {
					position: 'static',
				},
			},
			MuiToolbar: {
				defaultProps: {
					disableGutters: true,
				},
			},
		},
	})

	return createTheme(theme, {
		typography: {
			h1: {
				fontSize: '3rem', // 48px
				fontWeight: theme.typography.fontWeightRegular,
			},
			h2: {
				fontSize: '2rem', //32px
				fontWeight: theme.typography.fontWeightRegular,
			},
			h3: {
				fontSize: '1.5rem', // 24px
				fontWeight: theme.typography.fontWeightRegular,
			},
			h4: {
				fontSize: '1.25rem', // 20px
				fontWeight: theme.typography.fontWeightRegular,
			},
			h5: {
				fontSize: '1rem', // 16px
				fontWeight: theme.typography.fontWeightRegular,
			},
			button: {
				fontSize: '1rem',
				fontWeight: theme.typography.fontWeightBold,
				textTransform: 'none',
			},
		},
		components: {
			// MuiButton: {
			// 	defaultProps: {
			// 		variant: 'contained',
			// 	},
			// 	styleOverrides: {
			// 		root: {
			// 			padding: '4px 14px',
			// 		},
			// 	},
			// },
		},
	})
}

export default muiTheme
