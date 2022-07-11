import { Center, HStack, VStack } from '@components/common';
import { Typography, Button } from '@mui/material';
import React, { useRef } from 'react';
import { BackgroundVideo } from '../common';
import Box from '@mui/material/Box';
import {
	choicesPage6ToColor,
	getUserChoice,
	colorToResult,
	choicesPage31ToResult,
} from '../choices/choices';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageTypography from '../common/PageTypography';
import HexagonIcon from '@mui/icons-material/Hexagon';
import OpacityIcon from '@mui/icons-material/Opacity';
import { useRouter } from 'next/router';

const TextArea = ({ title, text, type }: { [key: string]: string }) => {
	return (
		<Box
			component={motion.div}
			width={'80%'}
			display="flex"
			justifyContent="flex-start"
			alignItems="center"
			flexDirection="column"
			border={'solid'}
			borderRadius="1rem"
			py="0.5rem"
			px="0.5rem"
			sx={{
				border: '1px #f4f4f4 solid',
				boxShadow: '3px 3px 5px #DED4EC',
				backgroundColor: 'white',
			}}
			mt={'2rem'}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				delay: 5,
				duration: 3,
			}}
		>
			<Box
				display={'flex'}
				width="10rem"
				alignItems={'center'}
				paddingLeft={'1rem'}
				alignSelf="flex-start"
				position="relative"
				left="0.8rem"
				top="-1.6rem"
				borderRadius="2rem"
				flexBasis="2rem"
				sx={{
					backgroundColor: '#F2E7FF',
					border: '1px #f4f4f4 solid',
					boxShadow: '3px 3px 5px #DED4EC',
				}}
			>
				<Box
					display={'flex'}
					justifyContent="center"
					alignItems={'center'}
					width={'2rem'}
					height={'2rem'}
					sx={{
						backgroundColor: 'white',
						borderRadius: '50%',
						marginRight: '0.5rem',
						boxShadow:
							'inset 1px 1px 4px 2px rgba(128, 81, 180, 0.25)',
					}}
				>
					{type === '2' ? (
						<HexagonIcon
							style={{ color: '#F2E7FF', fontSize: '20' }}
						/>
					) : (
						<OpacityIcon
							style={{ color: '#F2E7FF', fontSize: '20' }}
						/>
					)}
				</Box>

				<PageTypography fontSize={18}>{title}</PageTypography>
			</Box>
			<Typography
				component={motion.h3}
				variant="h3"
				paddingX="1rem"
				sx={{
					fontSize: 16,
					fontWeight: 300,
					position: 'relative',
					top: '-0.5rem',
				}}
			>
				{text}
			</Typography>
		</Box>
	);
};

const InteractivePage = () => {
	const router = useRouter();
	const [userChoicePage6, userChoicePage31] = [
		getUserChoice(6),
		getUserChoice(31),
	];

	const item = choicesPage31ToResult[userChoicePage31].topic;
	const itemText = choicesPage31ToResult[userChoicePage31].text;
	const color = colorToResult[userChoicePage6].color;
	const colorText = colorToResult[userChoicePage6].text;

	const photoPath = `${colorToResult[userChoicePage6].photo}-${choicesPage31ToResult[userChoicePage31].photo}`;

	const pageRef = useRef<React.RefObject<React.ReactInstance>>();

	const [downloadable, setDownloadable] = React.useState(false);
	return (
		<BackgroundVideo
			page="8"
			videoType={choicesPage6ToColor[userChoicePage6]}
			ref={pageRef}
			nextVideoOnClick={false}
		>
			<VStack gap="1rem">
				<Typography
					component={motion.div}
					variant="h3"
					align="center"
					width={'90%'}
					sx={{ fontSize: 18, fontWeight: 300 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 3,
					}}
				>
					เดินทางมาถึงตอนจบจริงๆแล้วหล่ะ
					<br />
					ขอบคุณที่มาเยี่ยมชม musuem of emotions นะ :)
				</Typography>
				<Center width={'75%'} height="auto">
					<HStack
						width="auto"
						justifyContent={'flex-end'}
						alignItems={'flex-end'}
					>
						<Box
							component={motion.div}
							height={'15rem'}
							overflow="hidden"
							position="relative"
							style={{
								borderRadius: '1rem',
								border: '1px #f4f4f4 solid',
								boxShadow: '0px 0px 10px #DED4EC',
								aspectRatio: '1',
								marginTop: '1.5rem',
								marginBottom: '1rem',
							}}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: 3,
								duration: 3,
							}}
						>
							<Image
								src={`/images/interactive/${photoPath}.png`}
								alt={photoPath}
								layout="fill"
							/>
						</Box>
					</HStack>
				</Center>
				<PageTypography fontSize={24} delay={3}>
					{item}
					{color}
				</PageTypography>
				<TextArea title={item} text={itemText} type={'1'} />
				<TextArea title={color} text={colorText} type={'2'} />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 7,
						duration: 3,
					}}
				>
					<Button
						variant="contained"
						onClick={() => {
							router.push('/home');
						}}
					>
						Back To Home
					</Button>
				</motion.div>
			</VStack>
		</BackgroundVideo>
	);
};

export default InteractivePage;
