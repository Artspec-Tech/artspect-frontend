import { VStack } from '@components/common';
import { Typography, TypographyProps } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={6}>
				<Typography
					paddingX={8}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					ภายในห้องโล่งนี้ มีเพียงแค่ตัวคุณ
					กับหมอกแห่งอารมณ์ที่เดินทางเป็นเพื่อนคุณมาตลอดในวันนี้
				</Typography>
				<Typography
					paddingX={8}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					หรืออาจจะอยู่มาตลอดชีวิต โดยที่คุณไม่เคยรู้ตัวเลยก็ได้
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
