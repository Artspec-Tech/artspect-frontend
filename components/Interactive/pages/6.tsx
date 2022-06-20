import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo, ChoiceButton } from '../common';

const InteractivePage = () => {
	const choices = [
		'สีเหลืองแห่งความสุข (joy)',
		'สีม่วงน่าประหลาดใจ (surprise)',
		'สีฟ้าดูเศร้าซึม (sadness)',
		'สีแดงแห่งความโกรธ (anger)',
		'สีส้มปนความกลัว (fear)',
		'สีเขียวน่าขยะแขยง (disgust)',
	];

	const choice2color = [
		'yellow_loop',
		'purple_loop',
		'blue_loop',
		'red_loop',
		'orange_loop',
		'green_loop',
	];

	function handleClick(event: React.SyntheticEvent, key: number) {
		window.localStorage.setItem(
			'userChoicePage6',
			JSON.stringify([choice2color[key], choices[key].split(' ')[0]])
		);
	}

	return (
		<BackgroundVideo>
			<VStack width={'100%'} gap="2rem">
				<Typography fontSize={20} width="80%" textAlign={'center'}>
					ฉันจึงเฝ้ามองหมอกแห่งอารมณ์ อยู่ครู่นึง แล้วพบว่า
					หมอกที่ปกคลุมฉันส่วนใหญ่มีสี…..
				</Typography>
				<VStack width={'100%'} height={'auto'} gap="1rem">
					{choices.map((choice, index) => (
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
