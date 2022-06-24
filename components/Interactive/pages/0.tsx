import React from 'react';
import { BackgroundVideo } from '../common';
import { useNextPage } from 'hooks/useNextPage';

const InteractivePage = () => {
	const [status, setStatus] = React.useState<'initial' | 'loop'>('initial');
	const videoRef = React.useRef<HTMLVideoElement>(null);

	React.useEffect(() => {
		if (videoRef.current) {
			videoRef.current.load();
		}
	}, [status]);

	function handleEnded() {
		setStatus('loop');
	}

	return (
		<BackgroundVideo
			videoType={status}
			handleEnded={handleEnded}
			loop={status === 'loop'}
			videoRef={videoRef}
			nextVideoOnClick={status === 'loop'}
		/>
	);
};

export default InteractivePage;
