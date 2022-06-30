import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="15" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack>
					<Typography
						align='center'
						fontSize={20}>
							ทันทีที่เพลงเข้าท่อนฮุค<br/>หมอกของนักแสดงเหล่านั้นก็เข้ามาปะปนกับสี<br/>หมอกของฉันจนกลมกลืนเป็นสีเดียวกัน<br/>กระจายตัวไปทั่วห้องซ้อม
					</Typography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
