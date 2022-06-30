import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNextPage } from 'hooks/useNextPage';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	const nextPage = useNextPage();

	return (
		<BackgroundVideo
			loop={false}
			onEnded={() => {
				nextPage();
			}}
		>
			<Center>
				<VStack>
					<Typography
						component={motion.h3}
						paddingX={10}
						sx={{
							fontSize: 20,
							fontWeight: 'bold',
							textAlign: 'center',
							textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 1,
							duration: 3,
						}}
					>
						“ฉันอยากจะพาเธอไปยังที่แห่งหนึ่ง
					</Typography>
					<Typography
						component={motion.h3}
						paddingX={10}
						sx={{
							fontSize: 20,
							fontWeight: 'bold',
							textAlign: 'center',
							textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 3,
							duration: 3,
						}}
					>
						ตามฉันมานะ”
					</Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
