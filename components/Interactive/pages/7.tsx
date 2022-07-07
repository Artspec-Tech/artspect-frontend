import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { ChoiceButton, BackgroundVideo } from '../common';
import { choicesPage7 } from '../choices/choices';
import { useNextPage } from 'hooks/useNextPage';
import { motion } from 'framer-motion';

const InteractivePage = () => {
	const nextPage = useNextPage();

	function handleClick(event: React.SyntheticEvent, key: number) {
		window.localStorage.setItem('userChoicePage7', String(key));
		nextPage();
	}

	return (
		<BackgroundVideo nextVideoOnClick={false}>
			<VStack gap={3.5}>
				<Typography
					variant="h3"
					fontWeight="bold"
					align="center"
					width={'60%'}
					sx={{ fontSize: 20 }}
					component={motion.h3}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 3,
					}}
				>
					หมอกเหล่านั้นเริ่มเคลื่อนตัวอีกครั้ง
					จนฉันสัมผัสได้ว่ามันควบตัวรัดแน่นอยู่ ที่...
				</Typography>
				{choicesPage7.map((choice, index) => (
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
