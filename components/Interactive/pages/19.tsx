import { Center, VStack } from '@components/common';
import { Typography, TypographyProps } from '@mui/material';
import { motion } from 'framer-motion';
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
						component={motion.h3}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 1,
							duration: 3,
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
						component={motion.h3}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 3,
							duration: 3,
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
						component={motion.h3}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 5,
							duration: 3,
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
						component={motion.h3}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 7,
							duration: 3,
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
