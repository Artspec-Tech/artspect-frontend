import { Center } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { CallServiceImage } from '@utils/images';
const InteractivePage = () => {
	return (
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
			<Image
				src={CallServiceImage}
				alt="Call Service"
				layout="fill"
				objectFit="cover"
			/>
		</Center>
	);
};

export default InteractivePage;
