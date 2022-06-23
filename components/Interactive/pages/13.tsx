import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="10" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack>
					<Typography fontSize={20}>
						“ฉันอยากจะพาเธอไปยังที่แห่งหนึ่ง”
					</Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
