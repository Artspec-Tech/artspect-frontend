import React from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import { useNextPage } from 'hooks/useNextPage';

const InteractivePage = () => {
	const nextpage = useNextPage();
	return (
		<BackgroundVideo
			loop={false}
			onEnded={() => nextpage()}
		></BackgroundVideo>
	);
};

export default InteractivePage;
