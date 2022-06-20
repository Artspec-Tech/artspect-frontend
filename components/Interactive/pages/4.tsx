import { Center, VStack } from '@components/common';
import { Typography, TypographyProps } from '@mui/material';
import fontWeights from '@utils/fontWeights';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="4" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack>
					<Typography>Hello</Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
