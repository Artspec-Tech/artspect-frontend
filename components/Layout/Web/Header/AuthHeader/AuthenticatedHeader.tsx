import { HStack } from '@components/common';
import {
	Typography,
	IconButton,
	useTheme,
	useMediaQuery,
	Button,
} from '@mui/material';
import { motion } from 'framer-motion';

import fontWeights from '@utils/fontWeights';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

const AuthenticatedHeader = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const router = useRouter();

	const handleSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/home' });
		router.push(data.url);
	};

	return isMobile ? (
		<HStack gap={1}>
			<Typography
				fontSize={12}
				fontWeight={fontWeights.extraLight}
				whiteSpace="nowrap"
			>
				My Account
			</Typography>
			<IconButton color="primary" size="small">
				<ShoppingCartOutlinedIcon />
			</IconButton>
		</HStack>
	) : (
		<HStack gap={3}>
			<Typography
				fontSize={17}
				fontWeight={fontWeights.extraLight}
				whiteSpace="nowrap"
			>
				My Account
			</Typography>
			<IconButton color="primary">
				<ShoppingCartOutlinedIcon />
			</IconButton>
			<Button onClick={handleSignOut}>
				<Typography
					fontSize={15}
					component={motion.p}
					fontWeight={fontWeights.extraLight}
					style={{
						cursor: 'pointer',
					}}
					whileHover={{
						textShadow: '0px 0px 4px gray',
					}}
					whiteSpace="nowrap"
				>
					Sign out
				</Typography>
			</Button>
		</HStack>
	);
};

export default AuthenticatedHeader;
