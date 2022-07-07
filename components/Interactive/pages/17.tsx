import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="17" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack>
					<Typography fontSize={20} paddingBottom='1rem'>
            และแล้วเพลงที่บรรเลงอยู่ก็ค่อยๆเบาลง
          </Typography>
          <Typography fontSize={20}>
            “เราไปห้องต่อไปกันเถอะ”
          </Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
