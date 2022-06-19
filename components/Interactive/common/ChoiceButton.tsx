import React from 'react';
import { Button, ButtonProps, Box, Typography } from '@mui/material';

type Props = {
	idx?: number;
} & ButtonProps;

const ChoiceButton = ({ idx = 0, children, ...props }: Props) => {
	return (
		<Button
			fullWidth
			variant="outlined"
			sx={{
				width: '65%',
				minHeight: 55,
				display: 'flex',
				justifyContent: 'flex-start',
				border: '1px #f4f4f4 solid',
				borderRadius: 3,
				boxShadow: '3px 3px 5px #DED4EC',
				'&:hover': {
					border: '1px #DED4EC solid',
				},
			}}
			{...props}
		>
			<Typography sx={{ fontSize: 30, marginRight: 1.5 }}>
				{String.fromCharCode(97 + idx)}
			</Typography>
			{children}
		</Button>
	);
};

export default ChoiceButton;
