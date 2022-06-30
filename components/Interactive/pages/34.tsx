import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { ChoiceButton, BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="34" videoType="loop" loop muted autoPlay>
			<VStack 
        justifyContent={"start"}
        paddingTop="4rem"
        gap={4}
      >
				<Typography
					align='center'
					fontSize={20}
				>
					เวลาของหมอกใกล้หมดลงแล้ว<br />ถึงเวลาที่คุณต้องบอกลามันแล้วหล่ะ
				</Typography>
        <Typography
					align='center'
					fontSize={20}
				>
					คุณจะบอกลาเพื่อนคนนี้ของคุณอย่างไร?
				</Typography>
      </VStack>
      <VStack
        justifyContent={"end"}
        paddingBottom="4rem"
      >
				<ChoiceButton idx={0}>
          บอกลาด้วยรอยยิ้ม
				</ChoiceButton>
				<ChoiceButton idx={1}>
          พูดขอบคุณที่คอยอยู่เคียงข้าง
				</ChoiceButton>
				<ChoiceButton idx={2}>
          โอบกอดด้วยความผูกพัน
				</ChoiceButton>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;