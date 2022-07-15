import React from 'react';
import { BgImage, VStack } from '@components/common';
import { LoginImage, GoogleIconImage } from '@utils/images';
import Image from 'next/image';

import {
	Box,
	BoxProps,
	Button,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

function Signin() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'flex-end',
				position: 'relative',
				height: {
					// xs: '110vw',
					// sm: '300px',
					lg: '760px',
					xl: '860px',
				},
				width: 'auto',
				backgroundImage: `url(${LoginImage.default.src})`,
				backgroundSize: 'contain',
				backgroundPositionX: '-18rem',
			}}
		>
			<VStack
				width="40%"
				sx={{ backgroundColor: 'white', paddingX: '5.5rem' }}
				gap={'2rem'}
			>
				<Typography
					variant="h1"
					align="center"
					sx={{
						fontSize: '2rem',
						fontFamily: 'Montserrat',
						fontWeight: 700,
						color: '#525252',
					}}
				>
					Login to your Account
				</Typography>
				<Button variant="outlined" fullWidth sx={{ color: '#828282' }}>
					<Box
						height={'2rem'}
						overflow="hidden"
						position="relative"
						style={{
							aspectRatio: '1',
							marginRight: '0.5rem',
						}}
					>
						<Image
							src={GoogleIconImage}
							alt={'Google Icon'}
							layout="fill"
						/>
					</Box>
					Continue with Google
				</Button>
			</VStack>
		</Box>
	);
}

export default Signin;
