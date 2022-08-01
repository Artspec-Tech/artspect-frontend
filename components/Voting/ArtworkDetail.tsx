import React from 'react';
import { Box, Typography, BoxProps } from '@mui/material';
import Footer from './Footer';
import { VStack } from '@components/common';
import { VanGoghImage } from '@utils/images';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
	imageSrc: string;
	imageTitle: string;
	imageDesc: string;
	handleClose: () => void;
};

function ArtworkDetail({
	imageSrc,
	imageTitle,
	imageDesc,
	handleClose,
}: Props) {
	return (
		<Box
			position="absolute"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: 'center',
				transform: 'translate(-50%, -50%)',
			}}
			left="50%"
			top="50%"
			width="90vw"
			height="90vh"
			zIndex={-1}
		>
			<IconButton
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					transform: 'translate(-50%, -50%)',
					backgroundColor: '#FF0000',
					color: '#D9D9D9',
					width: '2rem',
					height: '2rem',
				}}
				onClick={handleClose}
			>
				<CloseIcon />
			</IconButton>
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
				borderRadius="1rem 1rem 0rem 0rem"
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
						{imageTitle}
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
