import { VStack } from '@components/common';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<VStack gap={3} height="auto" mb="30rem">
				<PageTypography>
					“อ้าว ตรงนั้นน่ะ <br />
					อยากลองมาช่วยลุงลงสีหน่อยมั้ย”
				</PageTypography>
				<PageTypography delay={2}>
					จู่ๆก็มีคุณลุงสวมผ้ากันเปื้อนพร้อมพู่กันในมือเดินมาทักทาย
				</PageTypography>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
