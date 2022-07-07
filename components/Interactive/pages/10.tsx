import { VStack } from '@components/common';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={3}>
				<PageTypography>&quot;ไม่เป็นไรนะ คนเก่ง</PageTypography>
				<PageTypography delay={3}>
					ไม่ว่าเธอจะเห็นฉันเป็นสีอะไร
				</PageTypography>
				<PageTypography delay={5}>จะหนาแค่ไหน</PageTypography>
				<PageTypography delay={7}>หรือเพราะอะไร</PageTypography>
				<PageTypography delay={9}>
					การมีฉันอยู่มันเป็นเรื่องปกตินะ&quot;
				</PageTypography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
