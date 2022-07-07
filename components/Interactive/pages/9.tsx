import { Center } from '@components/common';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<Center>
				<PageTypography>
					“ตอนนี้เธอรับรู้ได้ถึงการมีอยู่ของฉันแล้ว ใช่ไหม”
				</PageTypography>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
