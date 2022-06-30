import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={3} height="auto" mb="30rem">
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
					“อ้าว ตรงนั้นน่ะ <br />
					อยากลองมาช่วยลุงลงสีหน่อยมั้ย”
				</Typography>
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
						delay: 3,
						duration: 3,
					}}
				>
					จู่ๆก็มีคุณลุงสวมผ้ากันเปื้อนพร้อมพู่กันในมือเดินมาทักทาย
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
