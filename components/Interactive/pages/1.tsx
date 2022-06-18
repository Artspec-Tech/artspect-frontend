import { Center } from '@components/common';
import { Typography, Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { CallServiceImage } from '@utils/images';

const InteractivePage = () => {
	return (
		<>
			<video
				loop
				muted
				autoPlay
				style={{
					width: 'min(100%, 480px)',
					float: 'left',
					top: 0,
					padding: 'none',
					position: 'fixed',
					zIndex: -1,
				}}
			>
				<source src="/videos/slide1.mp4" type="video/mp4" />
			</video>

			<Center>
				<Typography
					paddingX={10}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					เช้าวันนึงที่แสนจะธรรมดา ฉันตื่นลืมตาขึ้นมาบนเตียง...
				</Typography>
				<Box
					height={'10rem'}
					position="absolute"
					bottom={0}
					left={0}
					style={{
						aspectRatio: '1',
					}}
				>
					<Image src={CallServiceImage} alt="woman sit on a gear" />
				</Box>
			</Center>
		</>
	);
};

export default InteractivePage;
