import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="35" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack>
					<Typography fontSize={20} paddingBottom='1rem' fontWeight={"semibold"}>
            			“เราไปก่อนนะ”
          			</Typography>
					<Typography fontSize={20}>
						เสียงนี้ดังขึ้นจากกลุ่มหมอกที่ค่อยๆจางหายไป
					</Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;