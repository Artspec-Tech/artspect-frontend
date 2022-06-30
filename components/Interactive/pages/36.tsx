import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="36" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack>
          <Typography textAlign="center" fontSize={20}>
            ณ ตอนที่คุณคิดว่าเหลือแค่คุณในที่แห่งนี้<br />ทันใดนั้น ก็มีสิ่งของปรากฎอยู่ตรงหน้าคุณ
          </Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;