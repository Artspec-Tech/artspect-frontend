import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

//TODO: change background video to page 15
const InteractivePage = () => {
	return (
		<BackgroundVideo page="14" videoType="loop" loop muted autoPlay>
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
