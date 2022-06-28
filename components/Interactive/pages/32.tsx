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
					“สิ่งนี้อาจเป็นสิ่งที่เธออยากลองทำลึกๆมา ตลอดก็ได้”
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
					“ถ้าเวลาในวันนี้หมดลงแล้ว ลองทำมันดูสิ”
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
