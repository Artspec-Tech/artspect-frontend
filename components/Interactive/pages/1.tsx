import { Center } from '@components/common';
import { Typography, Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="1" videoType="loop" loop muted autoPlay>
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
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
