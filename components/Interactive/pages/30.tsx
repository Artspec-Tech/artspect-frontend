import { VStack } from '@components/common';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo loop={false}>
			<VStack>
				<PageTypography>ว่างเปล่า?</PageTypography>

				<PageTypography delay={3}>
					คำถามนี้ผุดขึ้นมาในหัวของฉัน
				</PageTypography>
				<PageTypography delay={5} mt={'3rem'}>
					ห้องสีขาวโปร่ง ไม่มีแม้กระทั่งกำแพงคอยกั้น
					นี่เป็นห้องจัดแสดงจริงๆหรือเนี่ย
				</PageTypography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
