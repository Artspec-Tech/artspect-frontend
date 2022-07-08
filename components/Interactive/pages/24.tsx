import { Center, VStack } from '@components/common';
import { Typography, TypographyProps } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import { motion, MotionProps } from 'framer-motion';
const PageTypography = ({ children, ...props }: TypographyProps & any) => {
	return (
		<Typography
			component={motion.h3}
			sx={{
				fontSize: 18,
				textAlign: 'center',
				textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				delay: 1,
				duration: 3,
			}}
			{...props}
		>
			{children}
		</Typography>
	);
};
const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack justifyContent={'start'}>
				<PageTypography
					marginTop={12}
					marginBottom={2}
					marginX={12}
					color="white"
				>
					ห้องสุดท้ายนี้ดูมืดผิดหูผิดตา มีหมอกปกคลุมเต็มไปหมด
				</PageTypography>
				<PageTypography marginBottom={2} marginX={8} color="white">
					มีเพียงแสงโคมไฟที่ส่องลงมาบนหน้านักกวีที่นั่งกุมขมับอยู่
				</PageTypography>
				<PageTypography color="white">
					ฉันค่อยๆเดินเข้าไปหาเขาใกล้ๆ
				</PageTypography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
