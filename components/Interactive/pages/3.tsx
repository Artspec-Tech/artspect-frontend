import { Center } from '@components/common';
import { Typography, TypographyProps } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';
import { motion } from 'framer-motion';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
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
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 4,
					}}
				>
					หมอกแห่งอารมณ์เหล่านั้น
					<br />
					ดูมีสีสันปะปน
					<br />
					แล้วสีไหนที่ปกคลุมฉัน
					<br />
					อยู่กันบ้างนะ?
				</Typography>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
