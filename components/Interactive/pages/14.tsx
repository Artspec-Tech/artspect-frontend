import { Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { ChoiceButton, BackgroundVideo } from '../common';

const InteractivePage = () => {
	return (
		<BackgroundVideo page="14" videoType="loop" loop muted autoPlay>
			<Center>
				<VStack gap={'2rem'}>
					<Typography
						align='center'
						fontSize={20}>
						หมอกพาฉันเดินเข้าห้องไปพบกับเหล่านักแสดง<br/>ที่กำลังซ้อมเต้นกันอย่างสนุกสนาน ทันใดนั้น<br/>หนึ่งในนักแสดงเหล่านั้นก็หันมาสบตา<br/>และชวนไปเต้นด้วย! ไม่ทันได้ตอบตกลง<br/>เขาก็จูงมือฉันเข้าไปในวงแล้ว ฉัน…
					</Typography>
					<ChoiceButton idx={0}>
						เข้าไปเต้นอย่างเป็นธรรมชาติ<br/>ตามจังหวะเสียงเพลง
					</ChoiceButton>
					<ChoiceButton idx={1}>
					ดูพวกเขาแล้วขยับตามอย่าง<br/>เก้ๆกังๆ
					</ChoiceButton>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
