import { VStack } from '@components/common';
import { Typography, TypographyProps } from '@mui/material';
import { motion } from 'framer-motion';
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
					component={motion.h3}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 3,
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
					component={motion.h3}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 3,
						duration: 3,
					}}
				>
					“ถ้าเวลาในวันนี้หมดลงแล้ว ลองทำมันดูสิ”
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
