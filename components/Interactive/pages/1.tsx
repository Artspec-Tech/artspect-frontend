import { Center } from '@components/common';
import React from 'react';

const InteractivePage = () => {
	return (
		<Center
			paddingX={10}
			sx={{
				fontSize: 20,
				fontWeight: 'bold',
				textAlign: 'center',
				textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
			}}
		>
			เช้าวันนึงที่แสนจะธรรมดา ฉันตื่นลืมตาขึ้นมาบนเตียง...
		</Center>
	);
};

export default InteractivePage;
