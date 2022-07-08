import React from 'react';
import { useRouter } from 'next/router';
import { BackgroundVideo } from '../common';
import { VStack } from '@components/common';
import { Button, Typography } from '@mui/material';
import Bowser from 'bowser';
import { Center } from '@components/common';

const InteractivePage = () => {
	const [status, setStatus] = React.useState<'initial' | 'loop'>('initial');

	const router = useRouter();

	if (Bowser.safari && Bowser.ios) {
		return (
			<Center>
				<Typography>
					Use PC or android device for Better experience
				</Typography>
			</Center>
		);
	}

	return (
		<BackgroundVideo
			videoType={status}
			handleEnded={() => setStatus('loop')}
			loop={status === 'loop'}
			nextVideoOnClick={false}
		>
			{status === 'loop' && (
				<VStack width="50%" marginTop="20rem" gap={'0.5rem'}>
					<Button
						variant="contained"
						fullWidth
						onClick={() => {
							router.push('/interactive/intro');
						}}
					>
						Click to enter
					</Button>
					<Button
						fullWidth
						sx={{
							textTransform: 'none',
						}}
						onClick={() => {
							router.push('/home');
						}}
					>
						continue to homepage
					</Button>
				</VStack>
			)}
		</BackgroundVideo>
	);
};

export default InteractivePage;
