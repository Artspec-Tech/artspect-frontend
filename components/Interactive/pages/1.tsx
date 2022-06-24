import { Center } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import { motion } from 'framer-motion';

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 10,
			duaration: 6,
		},
	},
};

const InteractivePage = () => {
	return (
		<BackgroundVideo loop={false}>
			<Center>
				<Typography
					component={motion.h1}
					paddingX={10}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
					variants={fadeIn}
					initial="initial"
					animate="animate"
				>
					เช้าวันนึงที่แสนจะธรรมดา ฉันตื่นลืมตาขึ้นมาบนเตียง...
				</Typography>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
