import { VStack } from '@components/common';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={3} height={'auto'} mb={'30rem'}>
				<PageTypography>
					&quot;ยินดีต้อนรับสู่ (museum of emotions) นะ
				</PageTypography>
				<PageTypography delay={3}>
					ทุกคนมีหมอกของตัวเองมาด้วยกันทั้งนั้น
				</PageTypography>
				<PageTypography delay={5}>
					แล้วก็มีหลายสีเต็มไปหมดเลย&quot;
				</PageTypography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
