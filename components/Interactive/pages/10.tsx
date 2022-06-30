import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={3}>
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
					&quot;ไม่เป็นไรนะ คนเก่ง
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
					ไม่ว่าเธอจะเห็นฉันเป็นสีอะไร
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
					จะหนาแค่ไหน
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
						delay: 7,
						duration: 3,
					}}
				>
					หรือเพราะอะไร
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
						delay: 9,
						duration: 3,
					}}
				>
					การมีฉันอยู่มันเป็นเรื่องปกตินะ&quot;
				</Typography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
