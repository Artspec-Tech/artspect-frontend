import { VStack } from '@components/common';
import { Typography, TypographyProps } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={6}>
				<Typography
					paddingX={9}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					“สวัสดีจ้ะ สนใจงานปั้นฉันหรอ?”
					<br />
					<br />
					ผู้หญิงวัยกลางคนสวมผ้ากันเปื้อนปรากฎตัวเข้ามาทักทายพร้อมกับหมอกสีเดียวกับฉันเลย
				</Typography>
				<Typography
					paddingX={9}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					“ลองมาปั้นด้วยกันสิ!”
					<br />
					<br />
					เธอยื่นฟองน้ำในมือให้ฉันและสอนวิธีการนำหมอกมาขึ้นรูป
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
