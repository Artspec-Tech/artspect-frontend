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
					ว่างเปล่า?
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
					คำถามนี้ผุดขึ้นมาในหัวของฉัน
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
					ห้องสีขาวโปร่ง ไม่มีแม้กระทั่งกำแพงคอยกั้น
					นี่เป็นห้องจัดแสดงจริงๆหรือเนี่ย
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
