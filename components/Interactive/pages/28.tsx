import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo loop={false}>
			<VStack>
				<Typography
					paddingX={10}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					“ขอให้เธอประทับใจกับห้องจัดแสดงสุดท้ายของ museum of
					emotions”
				</Typography>
				<Typography
					paddingX={10}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
						mt: '3rem',
					}}
				>
					“ห้องนี้ถูกสร้างไว้เพื่อเธอ”
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
