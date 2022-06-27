import { Center } from '@components/common';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<Center>
				<Typography
					paddingX={9}
					sx={{
						fontSize: 20,
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
					“ตอนนี้เธอรับรู้ได้ถึงการมีอยู่ของฉันแล้ว ใช่ไหม”
				</Typography>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
