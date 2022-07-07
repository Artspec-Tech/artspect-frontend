import { Center, VStack } from '@components/common';
import { useNextPage } from 'hooks/useNextPage';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import PageTypography from '../common/PageTypography';

const InteractivePage = () => {
	const nextPage = useNextPage();

	return (
		<BackgroundVideo
			loop={false}
			onEnded={() => {
				nextPage();
			}}
		>
			<Center>
				<VStack>
					<PageTypography>
						“ฉันอยากจะพาเธอไปยังที่แห่งหนึ่ง
					</PageTypography>
					<PageTypography delay={3}>ตามฉันมานะ”</PageTypography>
				</VStack>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
