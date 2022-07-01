import { VStack } from '@components/common';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={6}>
				<PageTypography>
					ภายในห้องโล่งนี้ มีเพียงแค่ตัวคุณ
					กับหมอกแห่งอารมณ์ที่เดินทางเป็นเพื่อนคุณมาตลอดในวันนี้
				</PageTypography>
				<PageTypography delay={3}>
					หรืออาจจะอยู่มาตลอดชีวิต โดยที่คุณไม่เคยรู้ตัวเลยก็ได้
				</PageTypography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
