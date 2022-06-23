import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo videoType="loop" loop muted autoPlay> //TODO: change background video to page 15
			<Center>
				<VStack>
					<Typography fontSize={20}>
						“เอาล่ะ ถึงแล้ว!”
					</Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
