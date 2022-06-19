import React, { MediaHTMLAttributes, RefObject } from 'react';

type Props = {
	page?: string;
	videoType?: string;
	handleEnded?: () => void;
	videoRef?: RefObject<any>;
} & MediaHTMLAttributes<any>;

const BackgroundVideo = ({
	page,
	videoType = 'loop',
	videoRef,
	handleEnded = () => 0,
	children,
	...props
}: Props) => {
	return (
		<>
			<video
				onEnded={() => handleEnded()}
				style={{
					width: 'min(100%, 480px)',
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-50%)',
					zIndex: -1,
					objectFit: 'fill',
				}}
				ref={videoRef}
				{...props}
			>
				<source
					src={`/videos/interactive/page${page}/${videoType}.mp4`}
					type="video/mp4"
				/>
			</video>
			{children}
		</>
	);
};

export default BackgroundVideo;
