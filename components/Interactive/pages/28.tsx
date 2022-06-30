import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNextPage } from 'hooks/useNextPage';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	const nextpage = useNextPage();

	return (
		<BackgroundVideo
			loop={false}
			onEnded={() => {
				nextpage();
				// setTimeout(nextpage, 3000);
			}}
		>
			<VStack>
				<Typography
					paddingX={10}
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
					“ขอให้เธอประทับใจกับห้องจัดแสดงสุดท้ายของ museum of
					emotions”
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
					component={motion.h3}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 3,
						duration: 3,
					}}
				>
					“ห้องนี้ถูกสร้างไว้เพื่อเธอ”
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
