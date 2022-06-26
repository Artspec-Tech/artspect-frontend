import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { ChoiceButton, BackgroundVideo } from '../common';
import { motion } from 'framer-motion';
import { choicesPage20 } from '../choices/choices';
import { useNextPage } from 'hooks/useNextPage';

const InteractivePage = () => {
	const nextPage = useNextPage();

	return (
		<BackgroundVideo nextVideoOnClick={false}>
			<VStack gap={3.5}>
				<Typography
					component={motion.h3}
					variant="h3"
					align="center"
					width={'60%'}
					marginBottom={4}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						letterSpacing: '1px',
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 3,
					}}
				>
					ระหว่างที่ปั้นอยู่นั้น หมอกก็ถามชั้นด้วยเสียงหัวเราะเบาๆว่า
					“เป็นไงบ้าง? เพลินเลยนะ”
				</Typography>
				{choicesPage20.map((choice, index) => (
					<ChoiceButton
						key={index}
						idx={index}
						onClick={nextPage}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 3.5 + index * 1.1,
							duration: 1,
						}}
					>
						{choice}
					</ChoiceButton>
				))}
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
