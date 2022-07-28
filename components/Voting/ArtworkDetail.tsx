import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from './Footer';
import { VStack } from '@components/common';
import { VanGoghImage } from '@utils/images';
import Image from 'next/image';

function ArtworkDetail() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
			}}
			width="100vw"
			height="100vh"
		>
			<VStack
				sx={{
					backgroundColor: '#353535',
					gap: {
						xs: '2rem',
						sm: '3rem',
						md: '4rem',
						xl: '5rem',
					},
				}}
			>
				<Box
					width="90%"
					height="50%"
					overflow="hidden"
					position="relative"
				>
					<Image
						src={VanGoghImage}
						alt="Van gogh"
						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Box
					width="90%"
					height="auto"
					overflow="hidden"
					position="relative"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-end',
						alignItems: 'end',
					}}
					color="white"
					gap={2}
				>
					<Typography
						variant="h1"
						component="h1"
						fontSize={{
							xs: '20px',
							sm: '30px',
							md: '40px',
						}}
					>
						ART NAME
					</Typography>
					<Typography
						variant="h3"
						component="h3"
						fontSize={{
							xs: '10px',
							sm: '12px',
							md: '20px',
						}}
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Corporis animi obcaecati fuga consequuntur tempore
						repudiandae impedit quo, totam vel nostrum error cumque.
						Id voluptate tenetur sed voluptas deserunt. Veritatis,
						reiciendis.
					</Typography>
				</Box>
			</VStack>
			<Footer />
		</Box>
	);
}

export default ArtworkDetail;
