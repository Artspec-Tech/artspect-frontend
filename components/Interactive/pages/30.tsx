import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo loop={false}>
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
					ว่างเปล่า?
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
					คำถามนี้ผุดขึ้นมาในหัวของฉัน
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
						delay: 5,
						duration: 3,
					}}
				>
					ห้องสีขาวโปร่ง ไม่มีแม้กระทั่งกำแพงคอยกั้น
					นี่เป็นห้องจัดแสดงจริงๆหรือเนี่ย
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
