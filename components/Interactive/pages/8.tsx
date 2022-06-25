import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
	choicesPage2,
	choicesPage6,
	choicesPage6ToColor,
	choicesPage7,
} from '../choices/choices';

function getUserChoice(page: number) {
	const userChoice = window.localStorage.getItem(`userChoice${page}`);
	return Number(userChoice);
}

const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#DED4EC',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#DED4EC',
	},
	'& .MuiOutlinedInput-root': {
		'&:hover fieldset': {
			borderColor: '#DED4EC',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#DED4EC',
		},
	},
});

const InteractivePage = () => {
	const [value, setValue] = React.useState('Controlled');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const [userChoicePage2, userChoicePage6, userChoicePage7] =
		React.useMemo(() => {
			return [
				// window.localStorage.getItem('userChoicePage2') || '',
				// JSON.parse(
				// 	window.localStorage.getItem('userChoicePage6') || ''
				// ) || Array(2).fill(null),
				// window.localStorage.getItem('userChoicePage7') || '',
				getUserChoice(2),
				getUserChoice(6),
				getUserChoice(7),
			];
		}, []);

	console.log(userChoicePage6);

	//TODO: If user has not yet made a choice, redirect to page 6

	return (
		<BackgroundVideo
			page="8"
			videoType={choicesPage6ToColor[userChoicePage6]}
			loop
			muted
			autoPlay
		>
			<VStack gap={3.5}>
				<Typography
					component="div"
					variant="h3"
					align="center"
					width={'60%'}
					sx={{ fontSize: 16, fontWeight: 300 }}
				>
					ฉันคิดว่าที่หมอกแห่งอารมณ์
					<Box
						display="inline"
						fontWeight="500"
					>{` (${choicesPage6[userChoicePage6]}) `}</Box>
					ที่
					<Box
						display="inline"
						fontWeight="500"
					>{` (${choicesPage2[userChoicePage2]}) `}</Box>
					และควบแน่นที่
					<Box
						display="inline"
						fontWeight="500"
					>{` (${choicesPage7[userChoicePage7]}) `}</Box>
					คงเป็นเพราะว่า ………
				</Typography>
				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: 300 },
					}}
					noValidate
					autoComplete="off"
				>
					<CssTextField
						id="filled-multiline-static"
						hiddenLabel
						multiline
						rows={6}
						placeholder="Enter text..."
					/>
				</Box>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
