import React from 'react';
import { Box, Typography } from '@mui/material';
import { FooterVotingImage } from '@utils/images';
import Image from 'next/image';
function Footer() {
	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				height: 'auto',
			}}
		>
			<Image
				alt="Mountains"
				src={FooterVotingImage}
				layout="responsive"
				objectFit="contain"
			/>
		</Box>
	);
}

export default Footer;
