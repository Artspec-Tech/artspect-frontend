import { Center, VStack } from '@components/common';
import { Typography, TypographyProps } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack height={undefined} gap={8}>
				<VStack gap={3}>
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
						ผู้หญิงวัยกลางคนสวมผ้ากันเปื้อนปรากฎตัวเข้ามาทักทายพร้อมกับหมอกสีเดียวกับฉันเลย
					</Typography>
				</VStack>
				<VStack gap={3}>
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
						เธอยื่นฟองน้ำในมือให้ฉันและสอนวิธีการนำหมอกมาขึ้นรูป
					</Typography>
				</VStack>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
