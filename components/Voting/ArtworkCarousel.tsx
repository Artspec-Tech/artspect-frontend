/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Center } from '@components/common';
import { Box } from '@mui/material';
import Slider from 'react-slick';

function ArtworkCarousel() {
	const settings = {
		dots: true,
		centerMode: true,
		infinite: true,
		speed: 500,
		rows: 2,
		slidesPerRow: 4,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesPerRow: 3,
					slidesToScroll: 3,
					rows: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesPerRow: 2,
					slidesToScroll: 2,
					rows: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesPerRow: 1,
					rows: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Box
			sx={{
				backgroundColor: '#343434',
				padding: '2rem',
			}}
			height="auto"
		>
			<Slider {...settings}>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="https://i.stack.imgur.com/5z01U.png"
							alt="Offer marketing image"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
				<Box>
					<Center
						style={{
							marginTop: 20,
						}}
					>
						<img
							src="http://placekitten.com/g/400/200"
							style={{
								width: '10rem',
								height: '10rem',
							}}
						/>
					</Center>
				</Box>
			</Slider>
		</Box>
	);
}

export default ArtworkCarousel;
