import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { ChoiceButton, BackgroundVideo } from '../common';
import { choicesPage7 } from '../choices/choices';
import { useNextPage } from 'hooks/useNextPage';

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
					align="center"
					width={'60%'}
					sx={{ fontSize: 20 }}
				>
					หมอกเหล่านั้นเริ่มเคลื่อนตัวอีกครั้ง
					จนฉันสัมผัสได้ว่ามันควบตัวรัดแน่นอยู่ ที่...
				</Typography>
				{choicesPage7.map((choice, index) => (
					<ChoiceButton
						key={index}
						idx={index}
						onClick={(e) => handleClick(e, index)}
					>
						{choice}
					</ChoiceButton>
				))}
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
