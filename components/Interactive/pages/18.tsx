import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="18" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack>
					<Typography
            fontSize={20} 
            paddingBottom='2rem'
            textAlign='center'
          >
            หมอกพาฉันเลี้ยวเข้าห้องสีขาว<br/>ที่มีรูปปั้นหมอกและภาพจิตรกรรมจัดแสดงอยู่<br/>มากมาย 
          </Typography>
          <Typography 
            fontSize={20}
            textAlign='center'
          >
            บางงานกำลังยิ้มแย้ม บ้างดูเศร้าหมอง<br/>อีกงานดูดุดัน บ้างก็หัวเราะคิกคัก 
          </Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
