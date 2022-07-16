import { VStack } from '@components/common';
import Description from '@components/Description';
import Timeline from '@components/Timeline';
import Product from '@components/Product';
import Showcase from '@components/Showcase';
import TwoImage from '@components/TwoImage';
import ArtistCarousel from '@components/Carousel';
import WebLayout from '@components/Layout/Web';
import { NextPageWithLayout } from 'types';
import { ReactElement } from 'react';
import { Box, Button } from '@mui/material';

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<VStack
				sx={{
					marginY: {
						xs: '0',
						md: '3rem',
					},
					marginX: {
						xs: '1.5rem',
						sm: '2rem',
						md: '6rem',
					},
					gap: {
						xs: '2rem',
						md: '5rem',
					},
				}}
			>
				<Description />
				<Timeline />
				<Showcase />
				<Product />
				<ArtistCarousel />
			</VStack>
			<TwoImage />
		</Box>
	);
};

Home.getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

export default Home;
