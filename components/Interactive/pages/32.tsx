import { VStack } from '@components/common';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={6}>
				<PageTypography>
					“สิ่งนี้อาจเป็นสิ่งที่เธออยากลองทำลึกๆมา ตลอดก็ได้”
				</PageTypography>
				<PageTypography delay={3}>
					“ถ้าเวลาในวันนี้หมดลงแล้ว ลองทำมันดูสิ”
				</PageTypography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
