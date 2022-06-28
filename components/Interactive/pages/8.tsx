import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
	choicesPage2,
	choicesPage6,
	choicesPage6ToColor,
	choicesPage7,
	getUserChoice,
} from '../choices/choices';
import { motion } from 'framer-motion';

const InteractivePage = () => {
	const [value, setValue] = React.useState('Controlled');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const [userChoicePage2, userChoicePage6, userChoicePage7] =
		React.useMemo(() => {
			return [getUserChoice(2), getUserChoice(6), getUserChoice(7)];
		}, []);

	const [isEnter, setIsEnter] = React.useState(false);

	return (
		<BackgroundVideo
			videoType={choicesPage6ToColor[userChoicePage6]}
			nextVideoOnClick={isEnter}
		>
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
					ฉันคิดว่าที่หมอกแห่งอารมณ์
					<Box display="inline" fontWeight="bold">{` (${
						choicesPage6[userChoicePage6].split(' ')[0]
					}) `}</Box>
					ที่
					<Box
						display="inline"
						fontWeight="bold"
					>{` (${choicesPage2[userChoicePage2]}) `}</Box>
					และควบแน่นที่
					<Box
						display="inline"
						fontWeight="bold"
					>{` (${choicesPage7[userChoicePage7]}) `}</Box>
					คงเป็นเพราะว่า ………
				</Typography>
				<Box
					component={motion.form}
					sx={{
						'& .MuiTextField-root': { m: 1, width: 300 },
					}}
					noValidate
					autoComplete="off"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 4,
						duration: 1,
					}}
				>
					<TextField
						hiddenLabel
						multiline
						rows={6}
						placeholder="Enter text..."
						onKeyDown={(e) => {
							if (e.keyCode == 13) {
								setIsEnter(true);
							}
						}}
						disabled={isEnter}
					/>
				</Box>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
