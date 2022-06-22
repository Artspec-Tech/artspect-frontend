import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo videoType="loop" loop muted autoPlay> //TODO: change background video to page 13
			<Center>
				<VStack>
					<Typography>“ฉันอยากจะพาเธอไปยังที่แห่งหนึ่ง”</Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
