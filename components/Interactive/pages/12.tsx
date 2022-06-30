import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={3} height={'auto'} mb={'30rem'}>
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
					&quot;ยินดีต้อนรับสู่ (museum of emotions) นะ
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
					ทุกคนมีหมอกของตัวเองมาด้วยกันทั้งนั้น
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
						delay: 5,
						duration: 3,
					}}
				>
					แล้วก็มีหลายสีเต็มไปหมดเลย&quot;
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
