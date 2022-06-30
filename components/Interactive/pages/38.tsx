import { BgImage, Center, VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';
import Box from '@mui/material/Box';
import {
	choicesPage6,
	choicesPage6ToColor,
	getUserChoice,
} from '../choices/choices';
import { motion } from 'framer-motion';
import Image from 'next/image';

const InteractivePage = () => {
	const [userChoicePage6, userChoicePage31] = React.useMemo(() => {
		return [getUserChoice(6), getUserChoice(31)];
	}, []);

	return (
		<BackgroundVideo videoType={choicesPage6ToColor[userChoicePage6]}>
			<VStack gap={3.5}>
				<Typography
					component={motion.div}
					variant="h3"
					align="center"
					width={'60%'}
					sx={{ fontSize: 16, fontWeight: 300 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 3,
					}}
				>
					เดินทางมาถึงตอนจบจริงๆแล้วหล่ะ ขอบคุณที่มาเยี่ยมชม musuem of
					emotions นะ :)
				</Typography>
				<Center width={'30%'}>
					<Box
						borderRadius={'50%'}
						height={['4.5rem', '10rem', '13rem']}
						overflow="hidden"
						position="relative"
						style={{
							aspectRatio: '1',
						}}
					>
						<Image
							src={'test'}
							alt="Van gogh"
							layout="fill"
							objectFit="cover"
						/>
					</Box>
				</Center>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
