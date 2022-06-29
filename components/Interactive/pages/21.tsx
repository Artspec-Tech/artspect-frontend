import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo loop={false}>
			<VStack gap={3}>
				<Typography
					paddingX={10}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					“อ้าว ตรงนั้นน่ะ <br />
					อยากลองมาช่วยลุงลงสีหน่อยมั้ย”
				</Typography>
				<Typography
					paddingX={10}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					จู่ๆก็มีคุณลุงสวมผ้ากันเปื้อนพร้อมพู่กันในมือเดินมาทักทาย
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
