import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { ChoiceButton, BackgroundVideo } from '../common';
import { choicesPage2 } from '../choices/choices';
const InteractivePage = () => {
	function handleClick(event: React.SyntheticEvent, key: number) {
		window.localStorage.setItem('userChoicePage2', String(key));
	}

	return (
		<BackgroundVideo>
			<VStack gap={3.5}>
				<Typography
					variant="h3"
					align="center"
					width={'60%'}
					marginBottom={8}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						letterSpacing: '1px',
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
					>
						{choice}
					</ChoiceButton>
				))}
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
