import { Box, ThemeProvider } from '@mui/material';
import { NextPage } from 'next';
import React, { ReactNode } from 'react';
import { createTheme } from '@mui/material/styles';
const interactiveTheme = createTheme({
	typography: {
		fontFamily: 'Prompt',
	},
	palette: {
		primary: {
			main: '#000',
		},
		secondary: {
			main: '#FFFFFF',
		},
	},
});

type Props = {
	children?: ReactNode;
};

const InteractiveLayout: NextPage = ({ children }: Props) => {
	return (
		<ThemeProvider theme={interactiveTheme}>
			<Box
				width="min(100%, 480px)"
				height="100vh"
				margin="auto"
				position="relative"
			>
				{children}
			</Box>
		</ThemeProvider>
	);
};

export default InteractiveLayout;
