/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Center } from '@components/common';
import ArtworkDetail from './ArtworkDetail';
import { Modal, Box, BoxProps } from '@mui/material';
import { Settings } from 'react-slick';

type Props = {
	imageInfo: { imageSrc: string; imageTitle: string; imageDesc: string };
} & Settings;

function ArtworkModal({ imageInfo, ...props }: Props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box>
			<Center
				style={{
					marginTop: 20,
				}}
				onClick={handleOpen}
			>
				<img
					src="https://i.stack.imgur.com/5z01U.png"
					alt="Offer marketing image"
					style={{
						width: '10rem',
						height: '10rem',
					}}
				/>
			</Center>
			<Modal open={open} onClose={handleClose}>
				<ArtworkDetail
					handleClose={handleClose}
					imageSrc={imageInfo.imageSrc}
					imageTitle={imageInfo.imageTitle}
					imageDesc={imageInfo.imageDesc}
				/>
			</Modal>
		</Box>
	);
}

export default ArtworkModal;
