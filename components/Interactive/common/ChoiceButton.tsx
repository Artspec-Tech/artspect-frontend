import React from 'react';
import { Button, ButtonProps, Box, Typography } from '@mui/material';
import { motion, MotionProps } from 'framer-motion';

type Props = {
	idx: number;
} & ButtonProps &
	MotionProps;

const ChoiceButton = ({
	idx = 0,
	children,
	initial,
	animate,
	transition,
	...props
}: Props) => {
	return (
		<motion.div
			style={{ width: '65%' }}
			initial={initial}
			animate={animate}
			transition={transition}
		>
			<Button
				fullWidth
				variant="outlined"
				sx={{
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
				<Typography>{children}</Typography>
			</Button>
		</motion.div>
	);
};

export default ChoiceButton;
