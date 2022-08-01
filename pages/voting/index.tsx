import React, { ReactElement } from 'react';
import { VStack } from '@components/common';
import { Typography, Box } from '@mui/material';
import WebLayout from '@components/Layout/Web';
import { NextPageWithLayout } from 'types';
import { VotingTextImage, GradientLineImage } from '@utils/images';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Voting from '@components/Voting';
import ArtworkCarousel from '@components/Voting/ArtworkCarousel';

const VotingPage: NextPageWithLayout = () => {
	const { data: session } = useSession();
	return (
		<>
			{/* <Voting /> */}
			<VStack
				sx={{
					marginBottom: {
						xs: '1rem',
						md: '3rem',
					},
					gap: {
						xs: '1rem',
						sm: '1.5rem',
						md: '3rem',
						xl: '3rem',
					},
				}}
			>
				<Box width={'100%'}>
					<Box
						width={'10rem'}
						sx={{
							top: '50%',
							left: '50%',
							position: 'relative',
							transform: 'translate(-50%)',
						}}
					>
						<Image src={VotingTextImage} alt="Voting Text" />
					</Box>
				</Box>
				<Box
					sx={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
						position: 'relative',
						width: '100%',
						height: {
							xs: '1rem',
							sm: '1.5rem',
							lg: '1.5rem',
							xl: '2rem',
						},
						backgroundImage: `url(${GradientLineImage.default.src})`,
						backgroundSize: 'cover',
						color: 'white',
						gap: {
							xs: '1rem',
							sm: '1.5rem',
							md: '3rem',
							xl: '3rem',
						},
						backgroundPosition: 'center center',
					}}
				>
					<Typography
						fontSize={{
							xs: '10px',
							sm: '14px',
							md: '20px',
						}}
						sx={{ alignSelf: 'center' }}
						fontWeight={'bold'}
						lineHeight={0.9}
					>
						31 JULY 2022
					</Typography>
					<Typography
						fontSize={{
							xs: '10px',
							sm: '14px',
							md: '20px',
						}}
						sx={{ alignSelf: 'center' }}
						fontWeight={'bold'}
						lineHeight={0.9}
					>
						-
					</Typography>
					<Typography
						fontSize={{
							xs: '10px',
							sm: '14px',
							md: '20px',
						}}
						sx={{ alignSelf: 'center' }}
						fontWeight={'bold'}
						lineHeight={0.9}
					>
						6 AUGUST 2022
					</Typography>
				</Box>
				<Typography
					textAlign="center"
					fontSize={{
						xs: '8px',
						sm: '14px',
						md: '20px',
					}}
					fontWeight="bold"
				>
					Click on your favorite artwork and submit your vote!
				</Typography>
			</VStack>
			<ArtworkCarousel />
		</>
	);
};

VotingPage.getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

export default VotingPage;