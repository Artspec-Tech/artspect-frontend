import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo, ChoiceButton } from '../common';
import { choicesPage6, choicesPage6ToColor } from '../choices/choices';

const InteractivePage = () => {
	function handleClick(event: React.SyntheticEvent, key: number) {
		window.localStorage.setItem('userChoicePage6', String(key));
	}

	return (
		<BackgroundVideo>
			<VStack width={'100%'} gap="2rem">
				<Typography fontSize={20} width="80%" textAlign={'center'}>
					ฉันจึงเฝ้ามองหมอกแห่งอารมณ์ อยู่ครู่นึง แล้วพบว่า
					หมอกที่ปกคลุมฉันส่วนใหญ่มีสี…..
				</Typography>
				<VStack width={'100%'} height={'auto'} gap="1rem">
					{choicesPage6.map((choice, index) => (
						<ChoiceButton
							key={index}
							idx={index}
							onClick={(e) => handleClick(e, index)}
						>
							{choice}
						</ChoiceButton>
					))}
				</VStack>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
