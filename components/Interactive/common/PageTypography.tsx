import { Typography, TypographyProps } from '@mui/material';
import { motion, MotionProps } from 'framer-motion';
const PageTypography = ({
	delay = 1,
	duration = 3,
	children,
	...props
}: any) => {
	return (
		<Typography
			component={motion.h3}
			paddingX={10}
			fontSize={20}
			sx={{
				fontWeight: 'bold',
				textAlign: 'center',
				textShadow: '0px 1px 1px rgba(0, 0, 0, 0.3)',
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				delay: delay,
				duration: duration,
			}}
			{...props}
		>
			{children}
		</Typography>
	);
};

export default PageTypography;
