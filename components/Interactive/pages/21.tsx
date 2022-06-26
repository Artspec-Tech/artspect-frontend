import { Center } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';

const InteractivePage = () => {
	return (
		<BackgroundVideo loop={false}>
			<Center>
				<Typography
					paddingX={10}
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						textAlign: 'center',
						textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
					}}
				>
					“อ้าว ตรงนั้นน่ะ อยากลองมาช่วยลุงลงสีหน่อยมั้ย”
					<br />
					<br />
					จู่ๆก็มีคุณลุงสวมผ้ากันเปื้อนพร้อมพู่กันในมือเดินมาทักทาย
				</Typography>
			</Center>
		</BackgroundVideo>
	);
};

export default InteractivePage;
