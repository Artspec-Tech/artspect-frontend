import { Center } from '@components/common';
import React from 'react';
import { BackgroundVideo } from '../common';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	return (
		<BackgroundVideo>
			<Center>
				<PageTypography>
					หมอกแห่งอารมณ์เหล่านั้น
					<br />
					ดูมีสีสันปะปน
					<br />
					แล้วสีไหนที่ปกคลุมฉัน
					<br />
					อยู่กันบ้างนะ?
				</PageTypography>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
