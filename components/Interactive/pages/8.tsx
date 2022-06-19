import { VStack } from '@components/common';
import { Typography } from '@mui/material';
import React from 'react';
import { BackgroundVideo } from '../common';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

	return (
		<BackgroundVideo page="8" videoType="loop" loop muted autoPlay>
			<VStack gap={3.5}>
				<Typography
					component="div"
					variant="h3"
					align="center"
					width={'60%'}
					sx={{ fontSize: 16, fontWeight: 300 }}
				>
					ฉันคิดว่าที่หมอกแห่งอารมณ์{' '}
					<Box
						display="inline"
						fontWeight="500"
					>{` (มีสีฟ้าดูเศร้าซึม) `}</Box>{' '}
					ที่
					<Box
						display="inline"
						fontWeight="500"
					>{` (หนาปิดมิดจนฉันหาทางออกไม่ได้) `}</Box>
					และควบแน่นที่
					<Box
						display="inline"
						fontWeight="500"
					>{` (ตรงหัวใจของฉัน) `}</Box>
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
