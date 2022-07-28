import React from 'react';
import { Center, VStack } from '@components/common';
import { LoginImage, GoogleIconImage } from '@utils/images';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

import {
	Box,
	Button,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';

function Signin() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const router = useRouter();
	const { data: session, status } = useSession();

	const handleOAuthSignIn = (provider: string) => () => signIn(provider);

	if (status === 'loading') {
		return (
			<Center height={'100vh'}>
				<Typography
					variant="h1"
					align="center"
					sx={{
						fontSize: '1rem',
						fontFamily: 'Montserrat',
						fontWeight: 700,
						color: '#525252',
					}}
				>
					Checking Authentication
				</Typography>
			</Center>
		);
	}
	if (session) {
		const url = router.query.callbackUrl?.toString();

		setTimeout(() => {
			url ? router.push(url) : router.push('/home');
		}, 3000);
		return (
			<VStack height={'100vh'} gap={'1rem'}>
				<Typography
					variant="h1"
					align="center"
					sx={{
						fontSize: '1rem',
						fontFamily: 'Montserrat',
						fontWeight: 700,
						color: '#525252',
					}}
				>
					You are already signed in
				</Typography>
				<Typography
					variant="h1"
					align="center"
					sx={{
						fontSize: '0.5rem',
						fontFamily: 'Montserrat',
						fontWeight: 700,
						color: '#525252',
					}}
				>
					Going back ...
				</Typography>
			</VStack>
		);
	}
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
				<Button
					variant="outlined"
					fullWidth
					sx={{ color: '#828282' }}
					onClick={handleOAuthSignIn('google')}
				>
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
