import { VStack } from '@components/common';
import { StackProps } from '@mui/material';
import { arrayBufferToBlob } from '@utils/binaryOperations';
import { db, Video } from '@utils/db';
import { fetchInteractiveVideos } from '@utils/fetchInteractiveVideos';
import { getOrElse } from '@utils/nullOperations';
import { useNextPage } from 'hooks/useNextPage';
import { useRouter } from 'next/router';
import React, { MediaHTMLAttributes } from 'react';
import Bowser from 'bowser';

type Props = {
	page?: string;
	src?: string;
	videoType?: string;
	nextVideoOnClick?: boolean;
	handleEnded?: () => void;
} & MediaHTMLAttributes<any> &
	StackProps;

const BackgroundVideo = ({
	page,
	src,
	videoType = 'loop',
	handleEnded = () => 0,
	children,
	loop = true,
	autoPlay = true,
	muted = true,
	nextVideoOnClick = true,
	ref,
	...props
}: Props) => {
	const { query } = useRouter();
	const nextPage = useNextPage();

	let page_path;
	if (Bowser.safari) {
		console.log('safari');
		page_path = `/videos/interactive/safari/${getOrElse(
			page,
			query.page
		)}/${videoType}.mov`;
	} else {
		console.log('chromium');
		page_path = `/videos/interactive/chromium/${getOrElse(
			page,
			query.page
		)}/${videoType}.mp4`;
	}

	return (
		<VStack
			onClick={nextVideoOnClick ? nextPage : undefined}
			ref={ref}
			{...props}
		>
			<video
				onEnded={() => handleEnded()}
				style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					zIndex: -1,
					objectFit: 'cover',
				}}
				loop={loop}
				autoPlay={autoPlay}
				muted={muted}
				src={page_path}
				typeof={'video/mp4'}
			/>
			{children}
		</VStack>
	);
};

export default BackgroundVideo;
