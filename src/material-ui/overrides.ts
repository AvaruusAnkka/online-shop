import { grey } from "@mui/material/colors"

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true // 0
		sm: true // 600
		md: true // 900
		lg: true // 1200
		xl: true // 1536

		// mobile: true; // 0
		// tablet: true; // 640
		// laptop: true; // 1024
		// desktop: true; // 1200
	}

	interface Palette {
    white: Palette['primary'];
  }

  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		white: true;
	}
}

export const breakpoints = {
	values: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536,
	},
}

export const palette = {
	white: {
		main: grey[100],
		light: grey[50],
		dark: grey[200],
		contrastText: 'rgba(0, 0, 0, 0.87)',
	}
}
