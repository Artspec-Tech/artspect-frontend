import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { ChoiceButton, BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="3" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack gap={4}>
					<Typography
						align='center'
            fontSize={20}
          >
            ระหว่างที่กำลังเต้นอยู่นั้น หมอกก็ถามฉันว่า<br />“เป็นยังไงบ้าง”
          </Typography>
					<ChoiceButton idx={0}>
						สนุกมากเลย!<br />ได้รับพลังบวกของพวกเขาเข้ามา<br />เต็มเปี่ยมเลยแหละ
          </ChoiceButton>
          <ChoiceButton idx={1}>
						มันก็ดีนะ<br />ฉันไม่ได้ปลดปล่อยแบบนี้มานานแล้ว
          </ChoiceButton>
          <ChoiceButton idx={2}>
						ก็โอเคนะ<br />แต่คราวหน้าขอดูอย่างเดียวดีกว่า
          </ChoiceButton>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
