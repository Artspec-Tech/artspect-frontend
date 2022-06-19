import { VStack } from '@components/common';
import { Typography, Box } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	const [status, setStatus] = React.useState('initial');
	const videoRef = React.useRef<HTMLVideoElement>(null);

	React.useEffect(() => {
		if (videoRef.current) {
			videoRef.current.load();
		}
	}, [status]);

	function handleEnded() {
		setStatus('loop');
	}

	return (
		<BackgroundVideo
			page="0"
			videoType={status}
			handleEnded={handleEnded}
			muted
			autoPlay
			loop={status === 'loop'}
			videoRef={videoRef}
		></BackgroundVideo>
		// <VStack>
		// 	<Box
		// 		height={':10px'}
		// 		width={'150%'}
		// 		sx={{
		// 			position: 'absolute',
		// 			border: '0.001px solid #000000',
		// 			transform: 'rotate(-61.32deg)',
		// 		}}
		// 	></Box>
		// 	<Typography
		// 		align="center"
		// 		sx={{
		// 			fontSize: 50,
		// 			textTransform: 'uppercase',
		// 			fontWeight: 'bold',
		// 			background:
		// 				'-webkit-linear-gradient(0deg, #6E5684 0%, #EF7F5E 20%, #F3B266 33.09%, #E8BC65 37.11%, #E8BC65 44.21%, #E8BC65 48.36%, #EF7F5E 57.07%, #6E5684 75.42%)',

		// 			WebkitBackgroundClip: 'text',
		// 			WebkitTextFillColor: 'transparent',
		// 			textShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		// 		}}
		// 	>
		// 		museum of emotions
		// 	</Typography>
		// 	<Typography
		// 		align="center"
		// 		sx={{
		// 			fontSize: 20,
		// 			fontWeight: 'bold',
		// 			textShadow: '0px 2px 3px rgba(0, 0, 0, 0.3)',
		// 			WebkitTextStroke: '0.4px white',
		// 		}}
		// 	>
		// 		By Artspect
		// 	</Typography>
		// </VStack>
	);
};

export default InteractivePage;
