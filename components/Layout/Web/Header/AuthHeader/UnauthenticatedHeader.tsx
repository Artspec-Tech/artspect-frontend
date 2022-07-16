import { Typography } from '@mui/material';
import fontWeights from '@utils/fontWeights';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { VStack } from '@components/common';

const UnauthenticatedHeader = () => {
	const router = useRouter();
	const handleSignIn = () => router.push('/auth/signin');

	return (
		<Link
			key={'/auth/signin'}
			href={`/auth/signin?callbackUrl=${router.asPath}`}
			passHref
		>
			<Typography
				fontSize={17}
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
				Sign in
			</Typography>
		</Link>
	);
};

export default UnauthenticatedHeader;
