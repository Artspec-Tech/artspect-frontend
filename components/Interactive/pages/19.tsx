import { VStack } from '@components/common';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack height={undefined} gap={8}>
				<VStack gap={3}>
					<PageTypography>
						“สวัสดีจ้ะ สนใจงานปั้นฉันหรอ?”
					</PageTypography>
					<PageTypography delay={3}>
						ผู้หญิงวัยกลางคนสวมผ้ากันเปื้อนปรากฎตัวเข้ามาทักทายพร้อมกับหมอกสีเดียวกับฉันเลย
					</PageTypography>
				</VStack>
				<VStack gap={3}>
					<PageTypography delay={5}>
						“ลองมาปั้นด้วยกันสิ!”
					</PageTypography>
					<PageTypography delay={7}>
						เธอยื่นฟองน้ำในมือให้ฉันและสอนวิธีการนำหมอกมาขึ้นรูป
					</PageTypography>
				</VStack>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
