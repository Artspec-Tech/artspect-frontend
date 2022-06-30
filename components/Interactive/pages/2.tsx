import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { ChoiceButton, BackgroundVideo } from '../common';
import { motion } from 'framer-motion';
import { choicesPage2 } from '../choices/choices';
import { useNextPage } from 'hooks/useNextPage';

const InteractivePage = () => {
	const nextPage = useNextPage();

	function handleClick(event: React.SyntheticEvent, key: number) {
		window.localStorage.setItem('userChoicePage2', String(key));
		nextPage();
	}

	return (
		<BackgroundVideo nextVideoOnClick={false}>
			<VStack gap={3.5}>
				<Typography
					component={motion.h3}
					fontWeight="bold"
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
					แล้วพบว่ามีหมอกแห่งอารมณ์ เคลื่อนตัวเข้าปกคลุม
					หมอกเหล่านั้นมีหน้าตา……
				</Typography>
				{choicesPage2.map((choice, index) => (
					<ChoiceButton
						key={index}
						idx={index}
						onClick={(e) => handleClick(e, index)}
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
