import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="13" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack 
					justifyContent="start"
					marginTop="5rem"
				>
					<Typography
						fontSize={20}
						paddingBottom="1rem"
					>
						ทันใดนั้นเอง
					</Typography>
					<Typography 
						textAlign='center' 
						fontSize={20}
					>
						ฉันก็ได้ยินเสียงบทสนทนาปนเสียงดนตรีแว่ว<br/>มาจากทางข้างหน้า
					</Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
